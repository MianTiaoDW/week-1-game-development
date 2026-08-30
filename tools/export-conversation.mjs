// Export only user-visible text; never publish raw Codex logs or embedded image data.
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
const [source, destination] = process.argv.slice(2);
if (!source || !destination) throw new Error('Usage: node tools/export-conversation.mjs LOG OUTPUT_DIRECTORY');
fs.mkdirSync(destination, { recursive: true });
const messages = [];
const ignored = /^(?:<recommended_plugins>|# AGENTS\.md instructions|<environment_context>|<local-command|<permissions)/;
let badLines = 0;
for await (const line of readline.createInterface({ input: fs.createReadStream(source) })) {
  let row;
  try { row = JSON.parse(line); } catch { badLines++; continue; }
  const p = row.payload;
  if (row.type !== 'response_item' || p?.type !== 'message' || !['user', 'assistant'].includes(p.role)) continue;
  if (p.role === 'assistant' && (p.channel === 'analysis' || p.channel === 'summary')) continue;
  const blocks = (p.content || []).filter(c => ['input_text', 'output_text', 'text'].includes(c.type) && c.text && !ignored.test(c.text.trim()));
  let body = blocks.map(c => c.text).join('\n\n');
  if (!body.trim()) continue;
  // Local attachment wrappers contain paths but not image pixels; retain them as provenance.
  body = body.replace(/data:image\/[^\s"<>]+/g, '[embedded image omitted]');
  messages.push({ number: messages.length + 1, timestamp: row.timestamp, role: p.role, phase: p.phase || p.channel || '', text: body });
}
const preface = '# 当前任务可恢复对话原文\n\n来源：本任务本地会话记录。按记录顺序导出用户与助手可见文本；包含历史错误提示词，不代表当前有效决策。排除系统/开发者指令、内部推理、工具输出、环境注入及图片二进制。附件路径保留；并非所有历史附件都已归档。时间为记录中的 UTC 时间，可能包含导入记录时间，不能据此认定图片生成时间。\n\n';
const text = preface + messages.map(m => `## ${String(m.number).padStart(3, '0')} | ${m.role === 'user' ? '用户' : '助手'} | ${m.timestamp} | ${m.phase}\n\n${m.text}\n`).join('\n');
fs.writeFileSync(path.join(destination, 'TRANSCRIPT.md'), text);
fs.writeFileSync(path.join(destination, 'messages.json'), JSON.stringify(messages, null, 2) + '\n');
fs.writeFileSync(path.join(destination, 'INDEX.md'), '# 对话索引\n\n' + messages.map(m => `- ${String(m.number).padStart(3, '0')} ${m.role}: ${m.text.replace(/\s+/g, ' ').slice(0, 140)}`).join('\n') + '\n');
console.log(JSON.stringify({ messages: messages.length, badLines, bytes: Buffer.byteLength(text), destination }));
