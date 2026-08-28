# 《星谱大陆》：角色、玩法与游戏界面开发

这是一个使用 AI 图片、AI 视频和程序交互制作的幻想冒险游戏前期设计仓库。当前主玩法已选择关卡制横版冒险跑酷，节奏玩法作为世界中的小游戏保留。当前优先任务是先锁定首版跑酷闭环，再建立营地、地图、角色选择、关卡 HUD 与结算所需的最小 UI 系统。

## 当前入口

接管本项目的 Codex 请按以下顺序阅读：

1. [`docs/HANDOFF_2026-08-28_RUNNER_AND_UI_DIRECTION.md`](docs/HANDOFF_2026-08-28_RUNNER_AND_UI_DIRECTION.md) — **当前总入口与最高优先级**，记录关卡制横版冒险跑酷转向、节奏小游戏位置、温暖星路旅行 UI、全部新失败记录和回家后的执行顺序。
2. [`docs/HANDOFF_2026-08-27_CROSS_THREAD_SYNC.md`](docs/HANDOFF_2026-08-27_CROSS_THREAD_SYNC.md) — Logo、加载动画与角色选择 UI 的前序跨对话停点。
3. [`docs/HANDOFF_2026-08-27_CHARACTER_SELECT_UI.md`](docs/HANDOFF_2026-08-27_CHARACTER_SELECT_UI.md) — 角色选择逻辑、UI 全部关键迭代、踩坑和资产管线。
4. [`AGENTS.md`](AGENTS.md) — 跨会话协作规则、当前任务和禁止事项。
5. [`docs/HANDOFF_2026-08-24.md`](docs/HANDOFF_2026-08-24.md) — 五名角色当前母版、美宣、出场动画与声音方案。
6. [`HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md`](HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md) — 品牌名称、Logo 与已暂停的加载循环动画资料。
7. [`docs/HANDOFF_2026-08-26_BANANA_BEETLE_REFINEMENT.md`](docs/HANDOFF_2026-08-26_BANANA_BEETLE_REFINEMENT.md) — 已暂停的第一镜世界母版、星荚甲虫与 Banana 分区修图记录。
8. [`CHARACTER_VISUAL_HANDOFF_2026-08-21.md`](CHARACTER_VISUAL_HANDOFF_2026-08-21.md) — 角色视觉实验历史。
9. [`CHARACTER_MJ_HANDOFF_2026-08-20.md`](CHARACTER_MJ_HANDOFF_2026-08-20.md) — 更早的群像和提示词历史。
10. [`GAME_DESIGN_HANDOFF.md`](GAME_DESIGN_HANDOFF.md) — 玩法、世界观、制作限制与早期完整记录。
11. [`docs/HANDOFF_2026-08-25_LOADING_SCREEN.md`](docs/HANDOFF_2026-08-25_LOADING_SCREEN.md) — 更早的加载页历史方案，仅用于追溯。

## 2026-08-28 准确停点

- 游戏名称锁定为《星谱大陆》／`ASTRAL SCORE`，Logo 方向已确认但尚未开始正式绘制。
- 主玩法已选择 B：有起点终点、岔路、剧情事件和探索收集的关卡制横版冒险跑酷。节奏游戏作为世界中的小游戏保留，不再是主循环。
- 当前先锁首版跑酷闭环；第一个问题是角色自动向右前进还是允许左右控制。加载动画、Logo、角色选择视觉生成与波姆旧美宣全部暂停，未经用户重新排序不得抢先恢复。
- UI 最新方向为“温暖星路旅行”：奶油黄内容区、清浅蓝结构、暖橙主操作、少量薄荷绿。功能页可用完整旅行册面板，角色选择等沉浸页只用边缘小组件。
- 角色选择原型位置与大小已由用户画出并归档；固定显示顺序仍为 `MILUKA → NAISHA → PEKO → YANQIU → BOMU`，其中 `NAISHA/NYSHA` 英文拼写待核验。
- 五张角色美宣已归档到 [`assets/handoff/2026-08-27/character-select/`](assets/handoff/2026-08-27/character-select/)，它们是全屏出场动画基础，不是要被抠成统一站姿的立绘。
- 页面使用英文 UI，右上包含金币和宝石，底部中央为五张小型约 `3:4` 角色卡，右下按钮文字为 `CONFIRM`。
- 独立资产板探索已经验证失败：旅行铭牌结果死板暗淡，轻量图形结果退化成请柬线框。回家后不要继续抽 UI；先定跑酷，再以用户原型做完整页面概念，通过后才反推组件。
- 五名角色身份与外形以 [`docs/HANDOFF_2026-08-24.md`](docs/HANDOFF_2026-08-24.md) 和 [`assets/character-masters/`](assets/character-masters/) 为准。
- 英雄联盟参考图库仅用于本地分析构图、光影、材质和动势，未上传到公开仓库。

不要依据旧章节恢复已否决角色设定，也不要继续使用完整美宣＋超长提示词一次重做全部 UI。详细边界与公司端开场信息见当前最高优先级交接。
