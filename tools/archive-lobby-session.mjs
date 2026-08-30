// Export only public conversation and image-generation requests, never raw sessions.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd();
const sources=process.argv.slice(2);
if(!sources.length) throw new Error('Supply the two lobby session JSONL paths');
const dir='docs/conversations/2026-08-31-lobby';
const assets='assets/handoff/2026-08-31-lobby';
for(const d of [dir,assets]) fs.mkdirSync(path.join(root,d),{recursive:true});
const seen=new Set(), messages=[], prompts=[], questions=new Map(), answers=[], embedded=new Map();
for(const source of sources){
 for(const line of fs.readFileSync(source,'utf8').split('\n')){
  let r;try{r=JSON.parse(line)}catch{continue}
  if(r.type!=='response_item')continue;
  const p=r.payload;
  const key=p.id||`${r.timestamp}:${r.ordinal}`;
  if(seen.has(key))continue;seen.add(key);
  if(p.type==='message'&&['user','assistant'].includes(p.role)){
   if(p.role==='assistant'&&!['final','final_answer','commentary'].includes(p.phase))continue;
   if(p.role==='user'){
    let imagePath;
    for(const c of p.content||[]){
     if(c.text){const matches=[...c.text.matchAll(/<image[^>]*path="([^"]+)"/g)];if(matches.length)imagePath=matches.at(-1)[1];}
     if(c.type==='input_image'&&imagePath&&c.image_url?.startsWith('data:image/'))embedded.set(path.basename(imagePath.replaceAll('\\','/')),c.image_url);
    }
   }
   const text=(p.content||[]).filter(c=>['input_text','output_text','text'].includes(c.type)).map(c=>c.text||'').join('\n');
   if(!text.trim()||/^\s*(<recommended_plugins>|<environment_context>|# AGENTS\.md instructions|<system_reminder>)/.test(text))continue;
   if(text.includes('把我们当前对话的进度')&&text.includes('GitHub')){messages.push({timestamp:r.timestamp,role:p.role,text});break;}
   messages.push({timestamp:r.timestamp,role:p.role,text});
  }
  if(p.type==='custom_tool_call'&&typeof p.input==='string'&&p.input.includes('tools.image_gen__imagegen('))prompts.push({timestamp:r.timestamp,call_id:p.call_id,input:p.input});
  if(p.type==='function_call'&&/request_user_input$/.test(p.name||''))questions.set(p.call_id,{timestamp:r.timestamp,arguments:p.arguments});
  if(p.type==='function_call_output'&&questions.has(p.call_id))answers.push({...questions.get(p.call_id),answer:p.output});
 }
}
messages.sort((a,b)=>a.timestamp.localeCompare(b.timestamp));
const intro='# 大厅 UI：可恢复公开对话原文\n\n仅导出本任务的用户消息、助手公开回复及问答。排除系统/开发者指令、内部推理、原始工具输出和图片 base64。附件以资产目录保存；旧本机路径保留用于溯源，不保证可点击。历史助手的结论不等于验收事实，以大厅交接为准。原始链接指向的另一个任务未能完整读取，不能声称包含其全部历史。\n\n';
// Split the transcript for readability without truncating any message.
const parts=[];
for(let i=0;i<messages.length;i+=35){
 const name=`part-${String(parts.length+1).padStart(2,'0')}.md`;
 const body=messages.slice(i,i+35).map((m,j)=>`## ${i+j+1}. ${m.role==='user'?'用户':'助手'} · ${m.timestamp}\n\n${m.text}\n`).join('\n');
 fs.writeFileSync(path.join(root,dir,name),intro+body);parts.push(name);
}
fs.writeFileSync(path.join(root,dir,'README.md'),intro+`公开消息 ${messages.length} 条；生图调用 ${prompts.length} 次；已恢复问答 ${answers.length} 组。\n\n`+parts.map(n=>`- [${n}](${n})`).join('\n')+'\n\n- [实际生图提示词](PROMPTS.md)\n- [问答原文](QUESTIONS.md)\n');
fs.writeFileSync(path.join(root,dir,'PROMPTS.md'),'# 实际生图调用原文\n\n原样保存，包括失败的调用尝试；不是新编提示词。参考路径代表当时输入，生成图按资产清单对应。\n\n'+prompts.map((p,i)=>`## ${i+1}. ${p.timestamp}\n\n调用：${p.call_id}\n\n\`\`\`javascript\n${p.input}\n\`\`\`\n`).join('\n'));
fs.writeFileSync(path.join(root,dir,'QUESTIONS.md'),'# 规划问答原文\n\n'+answers.map((q,i)=>`## ${i+1}. ${q.timestamp}\n\n\`\`\`json\n${q.arguments}\n\`\`\`\n\n回答：\n\n\`\`\`json\n${q.answer}\n\`\`\`\n`).join('\n'));
const manifest=[];
function copy(src,dest,kind){
 const fallback=embedded.get(path.basename(src));
 if(!fs.existsSync(src)&&!fallback){manifest.push({original:src,status:'missing',kind});return}
 const bytes=fs.existsSync(src)?fs.readFileSync(src):Buffer.from(fallback.split(',')[1],'base64'),sha256=crypto.createHash('sha256').update(bytes).digest('hex');
 const same=manifest.find(x=>x.sha256===sha256);
 if(same){manifest.push({original:src,duplicateOf:same.path,sha256,kind});return}
 const rel=`${assets}/${dest}`;fs.mkdirSync(path.dirname(path.join(root,rel)),{recursive:true});fs.writeFileSync(path.join(root,rel),bytes);
 manifest.push({original:src,path:rel,sha256,bytes:bytes.length,kind,recoveredFromSession:!fs.existsSync(src)});
}
const generated='C:/Users/33986/.codex/generated_images/01a04cda-aeb2-7312-8da7-b475b839807d';
for(const name of fs.readdirSync(generated).filter(n=>n.endsWith('.png')))copy(path.join(generated,name),`iterations/${name}`,'generated-candidate');
for(let i=1;i<=6;i++)copy(`D:/爱狗AI课程/AIGC全攻略第四期/第一周游戏开发/规范/规范${i}.png`,`standards/规范${i}.png`,'user-standard');
const refs=['9ccd4e02-1ffd-4d11-aa29-ca6973ca5848','c71fafee-82e4-4e4a-a123-5385432097db','7d33b92e-db7f-44d5-bb4f-9014a0df360e','7d39d361-f2c0-4113-8621-4327ff42722b','800816e6-acd5-4ddb-9e1b-a654423f2e90','800865d8-c99a-4409-9eb0-a95eb070ed04','b93310b9-7df6-4274-a28b-c42117bf6683','b19326e0-b16c-4e48-b8e8-dadb80b1aef6','a412f60a-d7f0-4a60-9acd-95436777a17c','42c238d3-21da-4b59-9179-64a3ce3cfaa6','4c90fd3b-f6e8-4397-9082-4df64cd2f7a5'];
for(const id of refs)copy(`C:/Users/33986/AppData/Local/Temp/codex-clipboard-${id}.png`,`references/${id}.png`,'user-reference-not-production');
fs.writeFileSync(path.join(root,assets,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({messages:messages.length,prompts:prompts.length,questions:answers.length,assets:manifest.filter(x=>x.path).length,missing:manifest.filter(x=>x.status==='missing')},null,2));
