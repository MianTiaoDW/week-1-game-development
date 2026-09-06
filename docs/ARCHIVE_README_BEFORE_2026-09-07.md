> 历史首页快照：已被 [2026-09-07 最新交接](HANDOFF_2026-09-07_CURRENT_ART_AND_UI.md) 取代。下文所有“当前/锁定”均为旧时点记录。

# 《星谱大陆》：角色、玩法与游戏界面开发

这是一个使用 AI 图片、AI 视频和程序交互制作的幻想冒险游戏前期设计仓库。当前主玩法是面向电脑网页的俯视角轻量动作 Roguelite；首版只制作米露卡，验证远近战切换、房间三波战斗、战后三选一祝福和整局重开。角色、群像、角色选择和大厅 UI 按各自交接独立推进；不要把某个任务的停点当成所有任务的统一优先级。

## 当前入口

### 最新玩法设计

先读 [2026-09-04 俯视角动作 Roguelite 玩法交接](HANDOFF_2026-09-04_TOPDOWN_ROGUELITE.md)。2026-08-28 的横版跑酷方向已经被取代，只保留为历史；随机武器、其他可玩角色、永久养成和多人队伍均不进入首个可玩版本。

### 大厅 UI 视觉探索

先读 [2026-09-04 大厅背景动画与 UI 收敛交接](HANDOFF_2026-09-04_LOBBY_ANIMATION_AND_UI_DIRECTION.md)，再按需读取 [2026-08-31 大厅 UI 交接](HANDOFF_2026-08-31_LOBBY_UI.md)。当前先完成明亮悬崖营地的单镜头静态基准帧：广角大透视、轻荷兰角、白天无旺火、米露卡落地无扫帚、五人自然分散并产生轻互动；随后叠加已锁定 UI 验证可读性，再制作 6–8 秒固定镜头待机循环。追逐群像不再作为大厅循环，可保留为开始冒险后的加载或宣传素材候选。

已归档此前 [57条公开消息、6组问答及9次生图调用](conversations/2026-08-31-lobby/README.md)、[六张规范与全部图像](../assets/handoff/2026-08-31-lobby/README.md)。右上金币/宝石/设置等已锁定组件不可擅改，规范中的示例系统不等于新增玩法；大厅基准帧、待机视频和最终 UI 均尚未完整验收。

### 五人群像与线稿

**2026-08-31更新：当前视觉制作停在五人动态群像的线稿精修。** 用户已确认米露卡骑扫帚修正、已生成初始线稿，精修提示词已交付但结果未验收。先读 [最新视觉交接](HANDOFF_2026-08-31_KEYART_AND_LINEART.md)。下方08-28优先级保留为玩法/UI历史，不再用其暂停顺序覆盖用户后来恢复的视觉任务。

- [全部可恢复对话（197条）](conversations/2026-08-31-keyart/TRANSCRIPT.md)
- [18份关键提示词与原话全文](prompts/2026-08-31/README.md)
- [修正骑乘后的彩稿](../assets/handoff/2026-08-31-keyart/current-color-broom-fixed.jpg) · [当前初始线稿](../assets/handoff/2026-08-31-keyart/current-lineart-initial.png)
- [14个关键图像的来源与哈希](../assets/handoff/2026-08-31-keyart/manifest.json)

加载世界观完整叙事、浮空岛环境、白底背影/3D站位、四人佩可动作与当前五人图均分支归档。原文保留错误历史，使用前看最新交接的冲突说明。接下来是线稿验收→扁平色稿→重构提示词→重新上色；本次没有把未完成项目标成定稿。

接管本项目的 Codex 请按以下顺序阅读：

玩法任务应首先读取 [`docs/HANDOFF_2026-09-04_TOPDOWN_ROGUELITE.md`](HANDOFF_2026-09-04_TOPDOWN_ROGUELITE.md)；下面的列表同时保留视觉与历史资料入口。

1. [`docs/HANDOFF_2026-08-28_RUNNER_AND_UI_DIRECTION.md`](HANDOFF_2026-08-28_RUNNER_AND_UI_DIRECTION.md) — 已被取代的横版跑酷方向与早期 UI 历史，仅用于追溯。
2. [`docs/HANDOFF_2026-08-31_CHARACTER_TURNAROUNDS.md`](HANDOFF_2026-08-31_CHARACTER_TURNAROUNDS.md) — 角色四视图的当前事实源：五人锁定项、米露卡候选问题、可直接使用的提示词、波姆体型纠正与后续验收顺序。
3. [`docs/HANDOFF_2026-08-31_CHARACTER_SELECT_UI_SYSTEM.md`](HANDOFF_2026-08-31_CHARACTER_SELECT_UI_SYSTEM.md) — **角色选择 UI 当前事实源**：3:4 卡片、锁定组件、`CONFIRM` 未完成状态、全部新迭代、提示词模板和下一步。
4. [`docs/HANDOFF_2026-08-27_CROSS_THREAD_SYNC.md`](HANDOFF_2026-08-27_CROSS_THREAD_SYNC.md) — Logo、加载动画与角色选择 UI 的前序跨对话停点。
5. [`docs/HANDOFF_2026-08-27_CHARACTER_SELECT_UI.md`](HANDOFF_2026-08-27_CHARACTER_SELECT_UI.md) — 角色选择逻辑、UI 前序迭代、踩坑和资产管线。
6. [`AGENTS.md`](../AGENTS.md) — 跨会话协作规则、当前任务和禁止事项。
7. [`docs/HANDOFF_2026-08-24.md`](HANDOFF_2026-08-24.md) — 五名角色当前母版、美宣、出场动画与声音方案。
8. [`HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md`](../HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md) — 品牌名称、Logo 与已暂停的加载循环动画资料。
9. [`docs/HANDOFF_2026-08-26_BANANA_BEETLE_REFINEMENT.md`](HANDOFF_2026-08-26_BANANA_BEETLE_REFINEMENT.md) — 已暂停的第一镜世界母版、星荚甲虫与 Banana 分区修图记录。
10. [`CHARACTER_VISUAL_HANDOFF_2026-08-21.md`](../CHARACTER_VISUAL_HANDOFF_2026-08-21.md) — 角色视觉实验历史。
11. [`CHARACTER_MJ_HANDOFF_2026-08-20.md`](../CHARACTER_MJ_HANDOFF_2026-08-20.md) — 更早的群像和提示词历史。
12. [`GAME_DESIGN_HANDOFF.md`](../GAME_DESIGN_HANDOFF.md) — 玩法、世界观、制作限制与早期完整记录。
13. [`docs/HANDOFF_2026-08-25_LOADING_SCREEN.md`](HANDOFF_2026-08-25_LOADING_SCREEN.md) — 更早的加载页历史方案，仅用于追溯。

## 最新准确停点

- 游戏名称锁定为《星谱大陆》／`ASTRAL SCORE`，Logo 方向已确认但尚未开始正式绘制。
- 主玩法已改为电脑网页端俯视角轻量动作 Roguelite；横版跑酷不再是当前方向。
- 首版只做米露卡：`WASD` 移动、鼠标左键攻击、`Q` 切换远程／近战、`E` 星辉爆发、`Space` 闪避、`F` 开宝箱。完整闭环和范围见 2026-09-04 玩法交接。
- 视觉专项仍从各自交接继续。玩法转向不等于自动重做角色选择、大厅、Logo 或加载动画。
- UI 最新方向为“温暖星路旅行”：奶油黄内容区、清浅蓝结构、暖橙主操作、少量薄荷绿。功能页可用完整旅行册面板，角色选择等沉浸页只用边缘小组件。
- 角色选择原型位置与大小已由用户画出并归档；固定显示顺序仍为 `MILUKA → NAISHA → PEKO → YANQIU → BOMU`，其中 `NAISHA/NYSHA` 英文拼写待核验。
- 五张角色美宣已归档到 [`assets/handoff/2026-08-27/character-select/`](../assets/handoff/2026-08-27/character-select/)，它们是全屏出场动画基础，不是要被抠成统一站姿的立绘。
- 页面使用英文 UI，右上包含金币和宝石，底部中央为五张小型约 `3:4` 角色卡，右下按钮文字为 `CONFIRM`。
- 2026-08-29 至 2026-08-31 已完成冷暖美宣上的多轮整页测试。返回、双货币、信息圆图标和无底框左右箭头的形状已锁定；角色卡宽高比为 3:4；`CONFIRM` 仍未通过。详细状态与提示词见 8 月 31 日专项交接。
- 五名角色身份与外形以 [`docs/HANDOFF_2026-08-24.md`](HANDOFF_2026-08-24.md) 和 [`assets/character-masters/`](../assets/character-masters/) 为准。
- 英雄联盟参考图库仅用于本地分析构图、光影、材质和动势，未上传到公开仓库。

不要依据旧章节恢复已否决角色设定，也不要继续使用完整美宣＋超长提示词一次重做全部 UI。详细边界与公司端开场信息见当前最高优先级交接。
