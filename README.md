# 《星谱大陆》：角色、玩法与游戏界面开发

这是一个使用 AI 图片、AI 视频和程序交互制作的幻想冒险游戏前期设计仓库。游戏包含音乐节奏与横屏跑酷玩法。当前紧急优先任务是角色选择页 UI；五名角色美宣将作为全屏出场动画，而不是统一背景中的独立站姿角色。

## 当前入口

接管本项目的 Codex 请按以下顺序阅读：

1. [`docs/HANDOFF_2026-08-27_CHARACTER_SELECT_UI.md`](docs/HANDOFF_2026-08-27_CHARACTER_SELECT_UI.md) — **当前最高优先级**，记录角色选择逻辑、UI 方向、全部关键迭代、踩坑、资产管线和下一次公司端会话的唯一下一步。
2. [`AGENTS.md`](AGENTS.md) — 跨会话协作规则、当前任务和禁止事项。
3. [`docs/HANDOFF_2026-08-24.md`](docs/HANDOFF_2026-08-24.md) — 五名角色当前母版、美宣、出场动画与声音方案。
4. [`HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md`](HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md) — 品牌名称、Logo 与已暂停的加载循环动画资料。
5. [`docs/HANDOFF_2026-08-26_BANANA_BEETLE_REFINEMENT.md`](docs/HANDOFF_2026-08-26_BANANA_BEETLE_REFINEMENT.md) — 已暂停的第一镜世界母版、星荚甲虫与 Banana 分区修图记录。
6. [`CHARACTER_VISUAL_HANDOFF_2026-08-21.md`](CHARACTER_VISUAL_HANDOFF_2026-08-21.md) — 角色视觉实验历史。
7. [`CHARACTER_MJ_HANDOFF_2026-08-20.md`](CHARACTER_MJ_HANDOFF_2026-08-20.md) — 更早的群像和提示词历史。
8. [`GAME_DESIGN_HANDOFF.md`](GAME_DESIGN_HANDOFF.md) — 玩法、世界观、制作限制与早期完整记录。
9. [`docs/HANDOFF_2026-08-25_LOADING_SCREEN.md`](docs/HANDOFF_2026-08-25_LOADING_SCREEN.md) — 更早的加载页历史方案，仅用于追溯。

## 2026-08-27 准确停点

- 游戏名称锁定为《星谱大陆》／`ASTRAL SCORE`，Logo 方向已确认但尚未开始正式绘制。
- 加载动画、Logo 与波姆旧美宣当前全部暂停；素材与结论保留，未经用户重新排序不得抢先恢复。
- 当前先完成单角色选择页 UI，再制作／接入角色出场动画。固定顺序为 `MILUKA → NAISHA → PEKO → YANQIU → BOMU`。
- 五张角色美宣已归档到 [`assets/handoff/2026-08-27/character-select/`](assets/handoff/2026-08-27/character-select/)，它们是全屏出场动画基础，不是要被抠成统一站姿的立绘。
- 页面使用英文 UI，右上包含金币和宝石，底部中央为五张小型约 `3:4` 角色卡，右下按钮文字为 `CONFIRM`。
- 视觉方向为“圆润星谱器物 UI”：中性品牌骨架＋少量角色主题色；内部允许材质和微光，外围保持干净以便切 PNG。
- 最新全页迭代因约束过度退化成通用圆角模板，只可参考尺寸与安全区，不是视觉母版。
- 下一次公司端会话先不垫角色美宣；在均匀浅暖灰背景上生成 A/B/C 三套独立 UI 资产家族，选型后再回到米露卡与佩可做冷暖双场景验证。
- 五名角色身份与外形以 [`docs/HANDOFF_2026-08-24.md`](docs/HANDOFF_2026-08-24.md) 和 [`assets/character-masters/`](assets/character-masters/) 为准。
- 英雄联盟参考图库仅用于本地分析构图、光影、材质和动势，未上传到公开仓库。

不要依据旧章节恢复已否决角色设定，也不要继续使用完整美宣＋超长提示词一次重做全部 UI。详细边界与公司端开场信息见当前最高优先级交接。
