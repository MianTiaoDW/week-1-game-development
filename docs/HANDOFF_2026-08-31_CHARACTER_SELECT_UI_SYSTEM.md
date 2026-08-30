# 2026-08-31 角色选择 UI 系统与生成提示词总交接

> **角色选择 UI 当前最高优先级事实源。** 本文同步 2026-08-29 至 2026-08-31 的完整讨论、视觉判断、锁定组件、失败稿、候选稿、提示词结构和下一步。主玩法与全项目背景仍以 `docs/HANDOFF_2026-08-28_RUNNER_AND_UI_DIRECTION.md` 为准；角色选择页凡与旧 UI 交接冲突，以本文为准。

更新时间：2026-08-31（Asia/Shanghai）

## 一、五分钟接管摘要

- 用户已重新把当前工作切回角色选择 UI。跑酷主玩法方向继续保留，但本轮不要先恢复玩法讨论、Logo、加载动画或波姆美宣。
- 当前页面采用 16:9 全屏角色美宣＋边缘 UI；美宣是第一视觉中心。
- 五张角色卡固定顺序：`MILUKA → NAISHA → PEKO → YANQIU → BOMU`。
- 角色卡最终比例为 **宽:高 = 3:4**。常态卡、名字遮罩、选中卡必须按三张不同外部参考分别映射，不能平均成普通圆角卡。
- 用户已明确满意并要求锁定：返回按钮、金币／宝石、角色名与三个特性图标、左右切换箭头的形状。后续生成只允许替换被点名的组件。
- `CONFIRM` 的颜色锁定为暖橙，文字为深海军蓝；形状仍未通过。`v13` 的橙色胶囊／旗签与 `v14` 的纸签都不是定稿。
- 当前最有价值的页面基底是 `ui-generated-card-shape-test-miluka-v12.png`：卡片关系接近当前要求，但确认按钮不通过。
- `ui-card-shape-spec-miluka-v11.svg` 是一次确定性分层实验，用户明确否决其视觉；只可用于理解图层关系。
- 正式管线：原始美宣不重绘；UI 固定图形绘制／切透明 PNG；角色卡外框、肖像蒙版、名字遮罩、选中态分层；动态文字和货币数值由程序叠加。

## 二、状态标签

- **已锁定**：用户明确要求保持，后续不得擅自改形。
- **方向锁定，细节未定**：结构成立，但需继续画到用户通过。
- **候选**：可继续比较，不能写成定稿。
- **失败记录**：用户已否决，只用于避免重复犯错。
- **外部参考**：只学习形状、层级、材质和系统方法，不复制角色、Logo、商业功能或原始资产。

## 三、当前页面结构

页面基准：1920×1080／16:9。

```text
┌ 返回 ───────────────────────────────── 金币 +   宝石 + ┐
│ 角色名                                                    │
│ 身份／副标题                         全屏角色美宣           │
│ 三个特性图标                                              │
│ 左箭头                                         右箭头      │
│             五张 3:4 角色卡                 CONFIRM        │
└───────────────────────────────────────────────────────────┘
```

已确认：

- 左上：返回按钮。
- 左侧：角色名、身份／副标题、三个特性图标；背后只允许局部无边界深色透明遮罩。
- 左右中部：无底框切换箭头。
- 右上：金币和宝石两个独立货币系统，每个都有独立 `+`。
- 底部中央：五张紧凑的 3:4 角色卡，不贴底，不遮挡角色表演。
- 右下：`CONFIRM`。
- 页面只用英文 UI。

当前示例文字：

```text
MILUKA
ASTRAL APPRENTICE
CURIOUS
MAGIC
AGILE
12,580
680
CONFIRM
```

佩可示例：

```text
PEKO
FELINE CANNONEER
BOLD
INVENTIVE
AGILE
```

上述特性文字仍是概念页临时文案，不应未经玩法确认直接写入最终数据表。

## 四、已锁定且禁止再重画的五组 UI

这些形状来自 `ui-original-art-light-card-test-peko-v8.png` 的局部和用户后续明确截图。用户多次强调“形状保留”。下一轮不得因为只修改卡片或确认按钮而让生成模型重画它们。

### 1. 返回按钮

- 奶油白纸签／页签式底形。
- 深海军蓝左箭头。
- 尾部有一个极小星点／菱形重音。
- 外轮廓不做普通圆形或纯胶囊。

### 2. 货币系统

- 金币和宝石是两个独立深海军蓝半透明底框。
- 金币、宝石和 `+` 是实体前景元素，不画死在底框里。
- 金币值示例 `12,580`；宝石值示例 `680`。
- `+` 使用奶油白实体圆形。
- 禁止合并货币、增加第三货币或改成灰褐色。

### 3. 角色信息区

- 大号暖象牙白幻想衬线角色名。
- 小型暖金／浅蓝身份副标题。
- 三个深海军蓝半透明圆形图标，内部是清楚的浅色扁平符号。
- 不加蓝色描边圈、复杂金属徽章或胶囊文字框。

### 4. 左右切换箭头

- 奶油白厚实箭头，深海军蓝外沿和短投影。
- 内侧有一个小暖橙星菱。
- 完全无底框，只保留箭头本体。
- 形状已获得用户明确好评，不得重新解释为圆按钮或普通 chevron。

### 5. 美宣可读性遮罩

- 左侧信息区允许局部深色透明渐变。
- 遮罩没有可见边框，不形成独立大面板。
- 强度随冷暖美宣调整；不能全屏压暗，也不能切断美宣。

## 五、角色卡精确规则

### 尺寸

- 最终比例：**宽:高 = 3:4**。
- 以用户提供的米露卡布局图决定占屏大小和排布，不使用外部抽卡截图的卡片尺寸。
- 外部参考只提供轮廓语言。
- 五卡紧凑横排，大小一致；选中态可以有非常克制的上移或光效，但不得变成巨型主卡。

### 三张参考的职责必须一对一映射

1. **常态卡参考**：只参考白色竖卡的外轮廓，不参考外部截图尺寸、角色、图标、文字、数量或倾斜角度。
2. **名字遮罩参考**：只参考卡片底部色块的轮廓。最终改为深海军蓝，保留圆角底部和流动上边界；名字使用暖象牙白。
3. **选中卡参考**：只参考暖黄色／橙黄色完整外形和顶部受控外延。卡片本体保持垂直，禁止复制倾斜角度、`New` 标签、徽章和角色。

### 图层关系

```text
外层卡体：常态奶油白／选中暖黄色
肖像蒙版：直接放角色美宣裁切或角色头像
底部名字遮罩：深海军蓝独立层
动态名字：程序文字
选中反馈：克制微光／短投影，可单独叠加
```

禁止：

- 左上角镂空、缺角、空洞或复杂星路切角。
- 把选中态做成“白卡＋黄色描边”；用户要的是完整黄色选中主体。
- 普通圆角头像卡、纸片错位相框、暗紫塔牌、过宽横卡。
- 大量徽章、宝石、星星和多余装饰。
- 把角色肖像、外框和名字底烘焙成不可拆的一张图作为最终开发资产。

## 六、`CONFIRM` 当前状态

### 已锁定

- 文案只写 `CONFIRM`。
- 主操作强调色保持暖橙。
- 文字使用深海军蓝。
- 不加左右装饰星或额外图标。
- 需要明显比次要控件更有操作权重。

### 已否决

- 普通橙色胶囊。
- 把选中卡尖角直接横向拉伸成旗子。
- 规整斜切梯形。
- 过度毛边、粗糙撕纸或无规则笔刷条。
- 只做“橙色底＋文字”，没有吸收参考中的层次和绘本感。

### 当前候选

`ui-confirm-paper-ticket-test-miluka-v14.png` 尝试了深海军蓝压底、暖橙动作层、奶油纸面文字层和小幅印刷纹理。它尚未获得用户确认，不能当作最终按钮。

下一轮应先围绕按钮本体做 2–3 个紧凑变体，再嵌回整页：

- 奶油文字层占比更小，让暖橙仍是主色。
- 使用受控的非对称纸签轮廓，而不是对称胶囊。
- 深蓝压底只露 3–6 px，形成厚度而不是黑边。
- 点阵／印刷纹理集中在一端，避免整条噪点。
- 学习《剑与远征：启程》“功能入口也是绘本物件”的方法，不照搬具体按钮。

## 七、外部参考的正确用途

### 《剑与远征：启程》

需要吸收：

- 魔法绘本／玻璃彩绘式世界观统一。
- 奶油纸面、暖色动作层、深色压底之间的层次。
- 色块、线条和插画一起构成功能入口。
- 小组件也有绘制感，不退化成企业 UI。
- 选中、未选中通过形状与色块明确区分。

不能照搬：

- 错位纸片相框。
- 具体卡片、按钮、角色、图标、Logo、商业活动布局。
- 竖屏抽卡和活动系统。

### 其他参考

- 货币参考只学习深色半透明承托底＋实体图标／加号。
- 卡片参考只学习三种轮廓的职责，不参考外部卡片尺寸。
- 实际尺寸以本项目布局图和 3:4 规则为准。
- 外部截图不上传公开仓库；本文只记录抽象方法。

## 八、冷暖双场景验证

必须至少在两张差异最大的美宣上验证：

- 冷色：`assets/handoff/2026-08-27/character-select/miluka-splash.jpg`。
- 暖色：`assets/handoff/2026-08-29/character-select/peko-splash-user-reference.jpg`。

验证原则：

- UI 骨架颜色固定，不跟米露卡变成全紫，也不跟佩可变成全橙。
- 只调整左侧无边界遮罩强度和局部文字阴影。
- 角色卡、货币、返回、箭头和主按钮在冷暖背景下仍像同一系统。
- 概念图可用生成模型判断气质；正式交付必须用原始美宣直接合成 UI 图层，避免原画被重绘变糊。

## 九、资产状态矩阵

目录：`assets/handoff/2026-08-29/character-select/`

| 文件／组 | 状态 | 用途 |
|---|---|---|
| `peko-splash-user-reference.jpg` | 原始输入 | 佩可暖色美宣事实源 |
| `ui-adaptability-test-*-v1.png`～`v3.png` | 失败记录 | 早期尺寸／质感探索；用户评价整体难看、扎眼 |
| `ui-adaptability-test-*-v4.png`～`v6.png` | 失败／过程记录 | 奇幻 UI 方法探索，但卡框和材质未统一 |
| `ui-original-art-bright-test-*-v7.png` | 失败记录 | 浅色 UI 与原画重生测试；形状、模糊和卡框仍有问题 |
| `ui-original-art-light-card-test-*-v8.png` | 局部事实源 | 佩可版的返回、货币、信息区和左右箭头形状被锁定；整页和卡片不是定稿 |
| `ui-original-art-vertical-card-test-*-v9.png` | 失败记录 | 把参考误译为普通竖版头像卡；选中态和按钮不符合要求 |
| `ui-card-shape-spec-miluka-v11.svg/.png` | 失败／结构参考 | SVG 分层实验；视觉被否决，只保留图层思路 |
| `ui-generated-card-shape-test-miluka-v12.png` | 当前页面候选 | 3:4 卡片关系接近当前方向；`CONFIRM` 明确不通过 |
| `ui-confirm-star-ticket-test-miluka-v13.png` | 失败记录 | 仍像普通橙色胶囊／旗签 |
| `ui-confirm-paper-ticket-test-miluka-v14.png` | 未确认候选 | 三层纸签按钮实验，尚未通过 |

目录 `assets/handoff/2026-08-28/ui-and-runner/` 中尚未提交的六张角色选择探索也保留为失败／过程证据：

- `character-select-immersive-dark-overlay-v3.png`
- `character-select-v4a-star-mist-crystal.png`
- `character-select-v4b-star-route-enamel.png`
- `character-select-v4c-travel-leather.png`
- `character-select-warm-star-route-v1.png`
- `character-select-warm-star-route-v2.png`

它们不是当前视觉母版。

## 十、完整讨论决策轨迹

以下按发生顺序记录本轮对话的全部有效信息。重复反馈不逐字抄录，但对应的设计错误全部保留。

1. 用户同步 GitHub 当晚进度后继续做 UI，并逐步确认轻材质 2D、少色、只区分选中／未选中。
2. 角色卡需要更小；左右箭头的形状和角色名排版获得好评。
3. 图标不应有奇怪蓝框；角色信息下三个图标应是深色半透明圆底＋简单平面图标。
4. 三个特性图标缩小并与文字左对齐；确认按钮与角色卡底部对齐；五个角色名字需要深色遮罩＋白字。
5. 多轮材质试验被整体否决，原因是换到其他美宣后会扎眼、缺乏适配性。
6. 用户提供《剑与远征：启程》大量 UI 分析图，强调学习魔法绘本／玻璃彩绘、纸面层次、卡片层级和叙事式 UI。
7. 用户提供佩可暖色美宣，要求用米露卡冷图与佩可暖图测试同一 UI。
8. 左侧角色信息区可使用局部半透明遮罩；确认按钮可有克制点阵；返回和货币下方需要同风格承托。
9. 金币和宝石必须拆成两个系统，各自带 `+`。
10. 用户否决灰褐色；确认按钮暖橙色保留，但规整斜切不受欢迎。
11. 用户提供橙色手绘 `CONFIRM` 和风格化箭头，要求左右切换箭头无底框。
12. 角色卡正式开发要把美宣剪贴进蒙版；外框和名字遮罩必须分层。
13. 用户要求参考 AFK 官网的美术方法，随后纠正：学习风格，不复制“错位纸片相框”。
14. 一轮亮色 UI 后用户仍选择深色返回／货币承托；角色卡左上镂空被否决。
15. Pinterest 可搜索 `illustrated fantasy game UI`、`painterly fantasy RPG UI`、`storybook fantasy game interface`、`hand-painted game UI assets`。
16. 货币采用深色半透明底框，金币／宝石／加号为实体；整体仍是浅色 UI 系统。
17. 返回、双货币、信息区、左右箭头五组形状被明确锁定；后续多次因生成结果改变它们而纠正。
18. 卡片规则被反复澄清：常态参考白卡轮廓；名字参考底部色块轮廓并改深蓝；选中参考完整暖黄色外形；不参考外部尺寸和倾斜角度。
19. 用户提供尺寸事实源并最终纠正卡片比例为 3:4。
20. 生成器多次把选中态错误做成黄描边白卡；验收必须单独检查完整黄色主体。
21. SVG 分层稿结构可拆，但视觉质量被否决；概念图继续使用生成器。
22. `v12` 用于继续评估卡片；下一问题集中到确认按钮。
23. `v13` 被认为没有真正参考 AFK，只是普通橙色按钮。
24. `v14` 尝试奶油纸面＋橙色动作层＋深蓝压底，目前未确认。
25. 当前同步请求要求把全部对话、进度、提示词结构、已定方向、未完成项和下一步提交 GitHub。

## 十一、生成器使用纪律

1. 每次只修改一个被点名组件；提示词第一段写清“只改什么、其余哪些像素冻结”。
2. 原始美宣是编辑目标；上轮生成图只用于布局／组件参考，不能无限叠代。
3. 连续两轮仍改坏锁定组件时，停止全页生成，先做组件近景变体或透明资产。
4. 每张参考图指定唯一职责；禁止一句“参考这些图的风格”。
5. 不把失败图存为 `final`、`approved` 或“定稿”。
6. 正式实现不能依赖生成图内的文字、数值和肖像；用原始资产与程序重新合成。

## 十二、可复用提示词结构

### A. 整页卡片校准提示词

```text
Use case: ui-mockup
Asset type: one polished 16:9 fantasy RPG character-selection concept image.

Inputs:
1. Original character splash art: immutable edit target. Preserve sharpness, composition, colors and character identity.
2. LOCKED UI system reference: preserve only the approved return, currencies, information area, trait discs and standalone arrows. Ignore its old cards and confirm button.
3. NORMAL CARD SHAPE reference: use only the cream-white upright outer contour. Ignore its content and size.
4. NAME MASK SHAPE reference: use only the lower overlay contour; recolor it deep navy. Ignore reward text.
5. SELECTED CARD SHAPE reference: use only the warm yellow selected outer silhouette and restrained top extension. Keep the project card vertical.

Primary request:
Create the character selection page over the untouched original splash art. Do not globally darken or repaint the source.

Locked layout:
- top left return ticket;
- left character name, subtitle and three dark circular trait icons;
- two independent top-right currency strips, each with its own solid icon and ivory circular plus;
- standalone left/right star chevrons with no backing;
- five compact bottom-centre cards in order MILUKA, NAISHA, PEKO, YANQIU, BOMU;
- lower-right CONFIRM.

Card construction:
- every card width:height = 3:4;
- unselected card body is cream white using input 3;
- portrait is clipped into a separate upper mask;
- lower name layer uses the deep-navy contour from input 4 and ivory serif text;
- selected card replaces the entire white outer body with the warm-yellow contour from input 5;
- keep cards upright; do not copy reference tilt, badges, labels or characters;
- no hollow corners, missing corners, generic rounded rectangles, purple tower frames, extra seals or excessive glow.

Text: "MILUKA", "ASTRAL APPRENTICE", "CURIOUS", "MAGIC", "AGILE", "NAISHA", "PEKO", "YANQIU", "BOMU", "CONFIRM", "12,580", "680".

Constraints:
English only. Preserve all locked UI forms. Avoid gray-brown surfaces, global black panels, neon, copied logos, Chinese text and watermarks.
```

### B. 单独修改 `CONFIRM` 的精确编辑结构

```text
Use case: precise-object-edit
Asset type: 16:9 fantasy RPG UI mockup.

Input 1 is the edit target.
Change ONLY the lower-right CONFIRM control. Preserve every other pixel: splash art, title, traits, return, currencies, arrows, all five cards, their positions, text and lighting.

Required button:
- exact text "CONFIRM" in deep navy;
- warm orange remains the dominant action color;
- illustrated fantasy story-ticket construction inspired by hand-painted paper UI, without copying a specific game asset;
- thin deep-navy offset backing visible by 3–6 px along lower/right edges;
- controlled asymmetric orange middle layer with subtle printed grain;
- optional smaller warm-ivory text surface, but it must not overpower the orange action color;
- one restrained curve/fold at an end; no symmetric capsule, huge spear point, slanted trapezoid, ribbon tails or rough torn strip;
- sparse halftone/stipple only near one edge;
- no star badge, extra icon or extra words.

Keep the same lower-right region and clear distance from the card strip.
```

### C. 输入图职责写法

```text
Image 1: immutable splash-art edit target.
Image 2: locked layout/component reference; list exact elements to keep.
Image 3: normal card outer silhouette only.
Image 4: lower name-mask silhouette only.
Image 5: selected card silhouette only.
```

不要写“参考这些图，做成类似剑与远征的感觉”。这会让模型平均混合所有参考并重画已锁定组件。

## 十三、下一步执行顺序

1. 以 `v12` 页面为基底，只做 `CONFIRM` 近景／页面内变体；不改变五组锁定 UI 和角色卡。
2. 一次最多做 2–3 个按钮候选，差异集中在纸面层级、橙色占比和边缘轮廓，不改布局。
3. 用户选定按钮后，在米露卡和佩可两张原始美宣上各做一张完整合成验证。
4. 双场景通过后停止整页生成；拆出返回、货币、信息图标、左右箭头、常态卡、选中卡、名字遮罩和确认按钮的透明 PNG／九宫格资产。
5. 在 Figma 或实际前端中重建 1920×1080 页面，程序叠加文字、数值、点击区域与状态。
6. 核验 `NAISHA`／`NYSHA` 拼写、三名角色特性文案和实际货币定义。
7. UI 定型后再回到首版跑酷闭环；不要同时恢复 Logo、加载动画和其他美宣任务。

## 十四、未完成清单

- `CONFIRM` 形状仍未通过。
- 角色卡三层关系接近方向，但尚未最终确认，也未制作透明资产。
- 米露卡／佩可双场景的最终同构页面尚未完成。
- 五张角色卡的真实肖像裁切未从原始角色资产正式制作。
- `NAISHA`／`NYSHA` 拼写未核验。
- 角色身份、副标题和三个特性文案未全部锁定。
- UI 字体及授权未核验。
- Hover／Pressed／Disabled／Selected 动效与点击反馈未设计。
- Figma 精确坐标、安全区、栅格和九宫格切片未建立。
- UI 尚未接入游戏代码。
- 首版跑酷的左右控制、成功失败、岔路、角色能力和 UI 页面清单仍待讨论。
- Logo、加载动画、星荚甲虫、波姆美宣继续暂停。

## 十五、接管者的第一句话

> 请先读 `docs/HANDOFF_2026-08-31_CHARACTER_SELECT_UI_SYSTEM.md`。当前只继续角色选择页 `CONFIRM` 与卡片系统定型。以 `ui-generated-card-shape-test-miluka-v12.png` 为页面候选，以 `ui-original-art-light-card-test-peko-v8.png` 的返回／货币／信息区／箭头为锁定形状；不要重画这些组件。卡片宽高比是 3:4，常态白卡、深蓝名字遮罩和黄色选中卡必须分别映射三张参考。`v11` SVG、`v13` 胶囊按钮都已失败，`v14` 纸签仅为未确认候选。
