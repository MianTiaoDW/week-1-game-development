import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const sourceDir = process.argv[2];
if (!sourceDir) throw new Error('Pass the local 第一周游戏开发 asset directory');
const target = 'assets/handoff/2026-08-31-keyart';
const entries = [
 ['nano-ai-1788115469875_5MB内.jpg','current-color-broom-fixed.jpg','用户确认骑乘修好了；不是整图最终验收'],
 ['nano-ai-1788116113813.png','current-lineart-initial.png','已生成初始线稿；待细化及验收'],
 ['米露卡四视图.png','references/miluka-turnaround.png','本轮身份参考'],
 ['波姆四视图.png','references/bomu-turnaround.png','本轮身份参考'],
 ['奈纱四视图.png','references/nasha-turnaround.png','本轮身份参考'],
 ['佩可四视图.png','references/peke-turnaround.png','本轮身份参考'],
 ['砚秋四视图.png','references/yanqiu-turnaround.png','本轮身份参考'],
 ['米露卡母版.png','references/miluka-master.png','本轮扫帚与角色参考，不强制当前图手持魔杖'],
 ['奈纱母版.png','references/nasha-master.png','单把收鞘忍刀、一枚手持苦无、三枚备用苦无'],
 ['佩可母版.jpeg','references/peke-master.jpeg','单炮口巨炮武器参考，当前图没有炮'],
 ['砚秋母版.jpg','references/yanqiu-master.jpg','四张符卡参考，当前彩稿没有明确四卡'],
 ['加载页1.jpg','history/loading-shot-composite.jpg','开场甲虫镜头历史拼图，未定稿'],
 ['素体.jpg','history/director-blocking.jpg','用户3D导演台：仅控制站位遮挡，不控制pose'],
];
const rows = entries.map(([file, destination, status]) => ({source:path.join(sourceDir,file),destination,status}));
rows.push({source:'D:/Google下载地址/CaiYuan_GunGun_Five_tiny_fantasy_adventurers_seen_from_behind_c9b697e0-faa6-4900-ad70-ecb06985ad96_3.png',destination:'history/approved-environment-composition.png',status:'用户对环境构图表示满意；占位角色不是最终角色'});
for(const row of rows) {
  if(!fs.existsSync(row.source)) {row.archived=false;continue;}
  const file=path.join(target,row.destination);
  fs.mkdirSync(path.dirname(file),{recursive:true});
  const buffer=fs.readFileSync(row.source);
  if(fs.existsSync(file)&&!fs.readFileSync(file).equals(buffer)) throw new Error(`Refusing to overwrite ${file}`);
  fs.copyFileSync(row.source,file);
  row.archived=true;row.bytes=buffer.length;row.sha256=crypto.createHash('sha256').update(buffer).digest('hex');
}
fs.writeFileSync(path.join(target,'manifest.json'),JSON.stringify(rows,null,2)+'\n');
console.log(JSON.stringify({archived:rows.filter(r=>r.archived).length,missing:rows.filter(r=>!r.archived),bytes:rows.reduce((s,r)=>s+(r.bytes||0),0)}));
