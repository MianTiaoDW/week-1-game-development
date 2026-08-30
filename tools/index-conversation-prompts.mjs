import fs from 'node:fs';
import path from 'node:path';
const root = 'docs/conversations/2026-08-31-keyart';
const messages = JSON.parse(fs.readFileSync(path.join(root, 'messages.json'), 'utf8'));
const dir = 'docs/prompts/2026-08-31';
fs.mkdirSync(dir, { recursive: true });
const selected = [
  [59,'opening-six-second-test','历史测试，不是完整开场总时长'],
  [79,'user-full-opening-story','用户完整故事原话；当前暂停'],
  [81,'opening-storyboard-28s','助手建议，28秒不是已确认时长'],
  [83,'opening-storyboard-24s','助手建议，24秒完整版与6–8秒循环未定稿'],
  [124,'floating-island-environment','历史环境方向，文生图＋风格参考'],
  [140,'back-view-group','历史背影群像，武器描述存在旧错误'],
  [151,'back-view-with-pose','历史候选，不能覆盖后来的用户3D站位'],
  [161,'director-blocking-and-pose','历史候选，素体仅锁站位，不锁动作'],
  [167,'back-view-text-only','历史候选，后续已转向正面动态群像'],
  [169,'restore-character-design','历史候选，恢复四视图身份'],
  [171,'initial-five-hero-replacement','历史错误版本：奈纱双刀等不可沿用'],
  [175,'miluka-front-five-hero','五人动态群像方向，角色数量以当前图为准'],
  [178,'annotated-replacement','历史版本，图9补图建议不能当已输入参考'],
  [181,'peke-front-four-hero','四人佩可前景分支，不是当前五人图'],
  [185,'peke-dynamic-pose','四人佩可动作分支；图号必须按实际上传重排'],
  [188,'broom-riding-fix','骑乘修正提示词，后续用户已说修好了'],
  [191,'lineart-extraction','已生成初始线稿的提取提示词'],
  [194,'lineart-refinement-original','已交付未验收；请先读交接中的内容冲突警告'],
];
let index = '# 提示词与关键原话全文索引\n\n以下正文从会话逐字提取，不是本次重写。历史错误保留用于追溯，状态注释优先于旧正文的绝对措辞。其他提示词也完整保存在对话原文中。\n\n';
for (const [number, name, status] of selected) {
  const m = messages.find(m => m.number === number);
  if (!m) throw new Error(`Missing message ${number}`);
  const file = `${String(number).padStart(3,'0')}-${name}.md`;
  fs.writeFileSync(path.join(dir,file), `# ${name}\n\n来源：对话消息 ${number}（${m.role}）。\n\n状态：${status}。\n\n---\n\n${m.text}\n`);
  index += `- [${number} ${name}](${file}) — ${status}。\n`;
}
fs.writeFileSync(path.join(dir,'README.md'), index);
const paths = new Set();
for(const m of messages) {
  for(const match of m.text.matchAll(/(?:[A-Za-z]:[\\/])[^\r\n<>"|]*?\.(?:png|jpe?g|webp|mp4|psd)/gi)) paths.add(match[0]);
}
fs.writeFileSync(path.join(root,'ATTACHMENT-PATHS.json'), JSON.stringify([...paths].map(source => ({source, existsAtSync:fs.existsSync(source), note:'路径存在不代表已归档或已验收；归档副本见资产manifest。'})),null,2)+'\n');
console.log(JSON.stringify({promptFiles:selected.length, referencedPaths:paths.size}));
