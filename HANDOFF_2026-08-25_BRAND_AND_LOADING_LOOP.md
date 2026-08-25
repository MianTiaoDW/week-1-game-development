# 2026-08-25 品牌命名与加载循环动画跨设备交接

> **当前最高优先级接管文档。** 本文记录 2026-08-25 已确认的游戏名称、Logo 方向、五人小队加载循环动画、三张关键帧方案、第一镜甲虫场景的生图试验和准确停点。凡旧文档与本文在品牌名称、加载动画或当前生图任务上冲突，以本文为准；五名角色的身份与外形以 `docs/HANDOFF_2026-08-24.md` 和 `assets/character-masters/` 为准。

更新时间：2026-08-25

仓库：`MianTiaoDW/week-1-game-development`

相关 Codex 任务：

- 品牌命名与 Logo：`codex://threads/01a03821-0a4b-7753-9565-5e706a28e5fc`
- 本次工作内容：五人小队加载循环动画、三张关键帧与第一镜甲虫场景迭代。

## 一、接管者先读什么

按以下顺序阅读：

1. 本文：最新品牌、加载动画和准确停点。
2. `docs/HANDOFF_2026-08-24.md` 与 `assets/character-masters/`：五名角色的当前身份、体型、服装、武器和母版。
3. `CHARACTER_VISUAL_HANDOFF_2026-08-21.md`：角色视觉探索和美宣迭代历史。
4. `CHARACTER_MJ_HANDOFF_2026-08-20.md`：更早的群像与提示词历史，仅用于追溯。
5. `GAME_DESIGN_HANDOFF.md`：玩法、低算力限制、星谱瓶与更早设计历史。

不要让用户重新解释本文已经记录的内容。不要用 2026-08-20 的旧方案覆盖 2026-08-24 的角色母版，也不要恢复已否决的角色设定、纵向道路构图或巨型装甲甲虫。

## 二、当前项目一句话

这是一个以五人小队探索明快奇幻世界为核心的游戏品牌，音乐节奏玩法是首个玩法，未来还计划加入横屏跑酷等模式；加载页使用可循环的角色短片，在等待进入游戏时讲清小队关系和世界规模。

## 三、游戏名称已经锁定

### 中文名

> **《星谱大陆》**

### 英文名

> **ASTRAL SCORE**

### 命名含义

- `Astral` 表示星界、群星与奇幻世界。
- `Score` 取“完整乐谱”含义，不取“游戏分数”。
- 中文名强调“这是一个可进入、可探索的世界”。
- 英文名强调这个世界的底层规则是由群星构成的乐谱。
- 中文和英文不是逐字机械翻译，但品牌含义一致。

### 为什么主标题不能写成纯音游名称

用户明确说明：除了音乐玩法，未来还计划制作类似横屏酷跑的玩法。因此总游戏名不能含 `Beat`、`Music`、`Rhythm`、`Run` 等会把品牌锁死的功能词。音乐、跑酷和其他玩法应作为《星谱大陆》下的模式名称。

曾举例但尚未正式锁定的模式工作名：

- 音乐玩法：星谱调律。
- 横屏跑酷：星径疾行。

### 已否决或不再采用的命名路线

- `ROVORA QUEST／洛沃拉奇旅`、`JOYROVE QUEST／乔伊洛奇旅`、`WONARO QUEST／沃纳洛奇旅`：用户不喜欢人为拼造、缺少直接中文含义的音译品牌词。
- “世界名＋QUEST／奇旅”结构：因用户转向“有中文含义的两个字＋大陆”而作废。
- 星脉大陆、星迹大陆、星潮大陆：用户最终提出并选择“星谱大陆”。
- `STAR SCORE`：英语中容易被理解为星级评分，不使用。
- `ASTRAL SCORE LAND/WORLD`：过长、普通、破坏单行 Logo，不使用。
- `Starsong`、`StarScript`、`SongRealm`：公开网络初筛发现已有明显近似产品或作品，不继续采用。

### 重名检查边界

此前公开网络初筛没有发现明显的同名游戏 `ASTRAL SCORE`，但这不是正式商标检索。进入商业发行前仍需要做商标、应用商店和域名层面的正式核查。

## 四、Logo 方向已经确认到哪里

### 已确认视觉性格

- 圆润、厚、饱满，亲和但不幼儿化。
- 整组文字具有向右上方启程、冲出的动势。
- 字母和汉字允许轻微大小差、倾斜、上下错位，不要僵硬排成直线。
- 首字或首字母可以承担“起跳”，后续字形像被它带着向前。
- 深色粗描边或错位阴影提供重量；尖角只作速度重音，主体保持圆润。
- 星星、星谱瓶核心、谱线、节拍或跑道只作为隐藏在字形中的世界观细节。
- Logo 需要在加载页左上角缩小后仍然清楚。
- 用户明确不喜欢折行，中文和英文都尽量单行。

### 当前建议的字形结构

- 中文：`星谱`作为主视觉，`大陆`约为其高度的 75%–85%，保持同一基线和单行结构。
- 整体略向右上倾斜。
- “星”负责起跳；“谱”的部分笔画可以转化为兼具声波与道路含义的轨迹。
- 英文：`ASTRAL SCORE` 单行；`SCORE` 中的 `S/C/O/R`适合圆润、前冲的变形，`O` 可嵌入五角星或星谱瓶核心。

### Logo 准确停点

名称已经确认，Logo 尚未开始正式字形草案。上一任务最后建议用浏览器视觉对比制作数组字形、动势和图形结构草案，尚未获得用户对“是否打开视觉对比页”的后续回复。

回家继续 Logo 时，不要重新起名；直接从 2–3 组单行字形方向对比开始。

## 五、加载循环动画的用途与播放规则

- 这是加载游戏时播放的循环动画。
- 动画播完时如果游戏还未加载完成，就无缝继续循环。
- 玩家可以选择看完整段，也可以不看完直接进入游戏。
- 动画的首要任务是展示五名角色的关系和世界观，不是长时间拍摄昆虫或空镜。
- 当前总时长建议约 20 秒，仍可在视频测试后微调。

## 六、加载动画完整叙事顺序

1. 摄像机跟随一只小型奇幻甲虫的飞行轨迹进入路边高草，机位随飞行轻微晃动，但甲虫尽量保持在画面中心。
2. 甲虫穿过草丛，停在横向道路近侧路边的一片较低草叶上。
3. 米露卡蹲在路边高草中，她的脑袋从草叶下方中央突然探出，眼睛与甲虫处于同一高度，兴奋而好奇地观察它。不是站着俯视，也不是从上方低头。
4. 米露卡因为停下观察甲虫而落后；前面另外四个人仍在继续走，约领先她 4–6 米。
5. 米露卡被前方佩可和奈纱的动静吸引，表情从兴奋转为疑惑，侧头看向队伍方向。
6. 摄像机跟随米露卡视线转向前方，切入／拉到队伍侧面的动态中景。
7. 佩可和奈纱走在最前面。佩可倒着走，顽皮地模仿奈纱严肃的忍者姿态、打趣奈纱；奈纱克制地侧眼看她，并轻轻把她的肩膀推回行进方向。两人不是打架。
8. 砚秋走在她们后面，温柔又无奈地看着两人，轻轻摇头。
9. 波姆走在最后，肩上扛着正确的双星重槌，眼睛笑成月牙，发出憨厚笑声。
10. 米露卡在远处画面边缘小跑追上队伍。
11. 五人走出山岭，来到悬崖。摄像机拉远，完整奇幻大世界显露。
12. 甲虫重新飞回近景草叶或沿前景掠回，画面返回开头关系，形成无缝循环。

## 七、三张关键帧的生产约束

用户希望只控制在三张图，通过三段首尾帧视频生成完成循环，而不是制作大量分镜。

当前三个叙事锚点：

1. **甲虫／米露卡场景锚点**：路边高草、横向道路、小甲虫落在草叶，随后米露卡从下方探头。
2. **四人行进互动锚点**：佩可与奈纱打趣，砚秋无奈摇头，波姆笑；米露卡远处追赶。
3. **悬崖世界揭示锚点**：五人作为小比例尺度标尺，镜头拉远展示完整大世界，并为甲虫回归第一镜留前景连接。

此前曾把第一张定义为“只有飞行甲虫、人物不出现”，但这会让第一段视频同时承担“飞行、落下、米露卡探头、转头、镜头转向四人”等过多动作。当前生产时应优先完成甲虫落叶场景母版，再决定米露卡是否直接加入这张关键帧，或由 Nano Banana Pro 作为该段终帧局部加入。不要未经测试就把三张的精确首尾关系声称为最终定稿。

建议节奏基线：

- 第一段约 7 秒：甲虫飞行与落下、米露卡探头、表情转折、镜头开始转向。
- 第二段约 8 秒：四人侧面互动、米露卡追上、队伍走向山岭出口。
- 第三段约 5 秒：世界揭示、短暂停留、甲虫回到近景并接回循环。

## 八、统一画风与参考图分工

目标不是复制官方角色或一比一构图，而是抽取可迁移的视觉语言：

> 明快鲜艳的英雄式卡通奇幻 MOBA 美宣 + 欧美奇幻动画电影的表演和动势 + 可信三维空间 + 精致二维厚涂表面。

用户提供的五张本地参考图及分工：

1. `066_Group_Braum Ezreal Jinx Malphite WR Promo 01.jpg`：晴朗天空、夸张透视、前景冲击和清晰动作。
2. `049_Group_Ahri Ashe Braum Lee Sin Pantheon WR Promo 01.jpg`：只参考悬崖与大世界的尺度、负空间和远景层次；不要复制暗色、黄昏或冰雪色调。
3. `050_Group_Ahri Braum Graves Jax Miss Fortune WR Wild Welcome Promo 01.jpg`：英雄群像主次、清晰剪影和体型层级。
4. `054_Group_Blitzcrank Jinx Lux Teemo Yasuo WR Promo 01.jpg`：明快高饱和色彩、强广角动势和欧美动画式肢体表现。
5. `055_Group_Blitzcrank Jinx Lux Teemo Yasuo WR Promo 02.jpg`：森林行进、侧面队伍构图、前中后景与植物框景。

这些官方参考图未提交到本公共仓库。家中继续工作时应从用户自己的素材目录重新垫图，不要从本仓库寻找它们。

统一色光：

- 蔚蓝天空、蓬松白云、鲜嫩黄绿色植被。
- 上午或中性白昼主光，阴影清透偏蓝。
- 鲜艳但受控的大色块；避免橙黄滤镜、奶油儿童绘本、塑料 3D 玩具和满屏发光雾。
- 动感来自镜头、透视、遮挡、动作轴和前后景视差，不来自无来源粒子。

## 九、第一镜最终空间结构

当前最重要的纠正是：**道路横向贯穿画面中部，不是从画面下方向中央远处延伸的纵向道路。**

正确空间：

```text
远景：幻想山岭、远方天然石拱、开阔蓝天与流动白云
━━━━━━━━ 横向土路，左至右贯穿画面中部 ━━━━━━━━
近景：近侧路边高草＋较低草叶＋中央小甲虫
                         ↑
                米露卡从下方探头
                         ↑
                       摄像机
```

具体要求：

- 摄像机位于道路一侧的路边高草中，朝道路对面拍摄。
- 横向道路约占画面中部的一条带状空间，几乎与画面上下边缘平行。
- 甲虫飞过近景草丛，停在近侧路边的叶片上；绝对不在路中央。
- 甲虫水平居中，但垂直位置在画面中央偏下，约画面高度 58%。
- 承托甲虫的叶片较低；周围高草明显高于它，形成包围和穿行感。
- 米露卡身体蹲在近侧草丛中，之后从草叶下方中央探头；脸、甲虫和草叶尖共享中心纵轴。
- 树木只在草丛周围／左右边缘形成柔和虚影，不形成封闭密林，也不抢中央焦点。
- 道路对面是低草坡、蓝绿色远山、少量弯曲石峰、遥远天然石拱和幻想云形。
- 远景是世界观暗示，不提前展示完整城市、高塔、浮空岛或大世界奇观。

## 十、当前甲虫设计

### 必须保持

- 是普通、很小的路边昆虫，不是主角、怪物或战斗单位。
- 约占画面宽度 6%–8%。
- 完全背对镜头，头部朝向道路对面；脸、眼睛和嘴不可见。
- 停稳时鞘翅闭合，不展开巨大翅膀。
- 通过朱红色与绿色环境的颜色对比、中心构图和选择性对焦成为视觉焦点，而不是靠巨大体积和复杂细节。

### 允许的轻微异世界外形

- 两片红色鞘翅呈自然重叠的水滴花瓣／种荚轮廓，前端圆润、后端略收尖并轻微上翘。
- 鞘翅接缝是一条极细的青绿色虹彩边缘。
- 背壳下缘只露出极窄的半透明青蓝折叠翅膜，不展开。
- 两根触角短小，末端像微小嫩芽，不能变成长角或触手。
- 仍只有六条细小昆虫腿；脚尖可有极小圆形吸附软垫。
- 配色可有 2–3 个极小淡金星点，但没有发光核心、机械结构或复杂纹理。

缩略图第一眼仍应是“一只小红虫”，放大后才发现它属于异世界。

## 十一、模型试验结论

### Midjourney

优点：风格控制强，最接近用户想要的明快英雄式厚涂画风。

问题：如果提示词直接把“英雄式奇幻 MOBA”作用在甲虫本体上，会把甲虫英雄化成巨大的红色装甲怪物、螃蟹或战斗单位。

正确用途：用于画风、光色、动势和基础构图探索，不负责精确角色／小生物结构定稿。

### GPT Image 2

优点：对空间提示词和复杂说明理解较好。

问题：容易绘制过多草叶、碎石、花朵、纹理和微小高光，形成高频细节噪点；甲虫也容易过于具体和突出。

正确限制：只允许甲虫、承托草叶和少量露珠为细节焦点；道路、草丛、山与云必须合并成干净的大中型色块。

### Nano Banana Pro

优点：相对更擅长控制构图、角色一致性和局部修改。当前选中的基础场景就是 Nano Banana Pro 结果。

问题：直接从零生成时美感普通，容易出现粗黑线、平面赛璐璐或儿童插画感。

正确用途：在 Midjourney／已选母版上锁定构图、缩放甲虫、改外形、加入米露卡和修复角色身份；提示中必须要求匹配输入图已有厚涂语言。

### 当前推荐管线

> Midjourney 探索画风和构图 → 选择母版 → Nano Banana Pro 做结构、角色和局部修复 → 视频模型做跟随运镜与首尾帧生成。

## 十二、已经确认的失败方向

- 甲虫位于画面左侧、道路位于右侧：不符合中心追踪镜头。
- 道路从下方向远方延伸：错误，最终必须是横向道路。
- 整张只有高草、道路消失：错误，横向道路必须清楚可见。
- 蓝白带笑脸的小精灵虫：过于传统、过于拟人。
- 巨大、细节密集、带角带钳的红色装甲虫：把普通小虫英雄化，错误。
- 甲虫正脸／侧脸：无法体现摄影机跟随它飞行，错误。
- 普通现实瓢虫只改颜色：异世界辨识度不足。
- 密集森林、中央大树：压迫且抢焦点；只保留左右边缘柔和树影。
- 远山只是普通圆坡：世界观暗示不足；允许少量弯曲石峰、天然石拱和流动云带。
- 远景出现城市、高塔、浮空岛或大型发光物：过早泄露完整大世界，不使用。

## 十三、已提交的当前工作图

当前通过的 Nano Banana Pro 场景基础图：

- `assets/handoff/2026-08-25/beetle-roadside-current.png`

这张图已经基本确认：横向道路、较低草叶、中央小红虫、较高草丛、幻想山形与流动白云。

它还没有执行最新的“种荚型小甲虫”外形调整，因此不是最终成片，只是下一轮编辑底图。

## 十四、当前准确停点

最新用户反馈：

> 甲虫可以不仅改变颜色，外形也再稍微有一点异世界变化。

已经提出并获得方向上的响应方案：将甲虫改为“种荚型小甲虫”，使用双瓣种荚状鞘翅、嫩芽形短触角和极窄折叠虹彩翅膜；仍需用户在 Nano Banana Pro 中实际执行并展示结果。

当前尚未完成：

- 种荚型小甲虫的最终 Nano Banana Pro 编辑结果。
- 米露卡探头加入第一镜。
- 第一镜首尾帧视频测试。
- 第二张四人行进互动关键帧。
- 第三张悬崖大世界关键帧。
- 三段视频生成、节奏和无缝循环验收。
- 正式 Logo 字形草案。

此前 `docs/HANDOFF_2026-08-24.md` 中的波姆“动物视角下的守护者”美宣已因本轮加载动画工作暂停。现有候选图和失败记录必须保留，但未获用户最终验收，不能标记为定稿，也不是当前第一优先任务。

## 十五、回家后的执行顺序

### 第一优先：完成甲虫母版

1. 将 `beetle-roadside-current.png` 作为 Nano Banana Pro 的唯一编辑底图。
2. 只修改甲虫外形，不改变道路、草叶、草丛、远山、云、镜头和色光。
3. 检查甲虫是否仍占画宽 6%–8%、背对镜头、停在路边低叶片上。
4. 只保留双瓣种荚背壳、嫩芽触角、极窄折叠翅膜三个异世界记忆点。

### 第二优先：加入米露卡

1. 垫图 1：通过的甲虫场景母版，作为唯一编辑目标。
2. 垫图 2：米露卡角色标准图，只负责脸、发型、帽子、服装和身份。
3. 米露卡身体蹲在近侧草丛，脸从画面下方中央探出。
4. 米露卡眼睛与甲虫严格平视；不是俯视。
5. 保持甲虫在最前景、草叶在两者之间；米露卡不触碰虫子。
6. 新增角色必须匹配底图的厚涂、光向和饱和度，不能像贴图。

### 第三优先：第一段视频测试

1. 摄像机跟随甲虫穿过高草，甲虫尽量保持画面中心。
2. 机位沿甲虫飞行轨迹轻微左右／上下晃动，不做剧烈手持。
3. 甲虫落到低草叶后，镜头自然减速并稳定。
4. 米露卡从下方中央突然探头，眼睛与虫子平视。
5. 如果第一段承担的动作过多，优先拆动作或调整三张关键帧锚点，不要让模型一次生成复杂转场而失控。

### 第四优先：第二、第三关键帧

- 第二张：侧面动态中景，前方佩可／奈纱互动，后方砚秋／波姆，米露卡远处小跑追赶。五人顺序、体型、武器按角色交接文档。
- 第三张：五人位于悬崖作为小尺度标尺；世界尺度参考 `049`，但使用明亮白昼色彩；前景预留甲虫或草叶作为回环连接。

### 第五优先：Logo

在动画资产有稳定结果后，回到品牌任务，直接制作《星谱大陆》／`ASTRAL SCORE` 的 2–3 组单行字形方向对比，不再讨论名字。

## 十六、回家后给 Codex 的第一句话

> 请先读根目录 `HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md`。游戏名已锁定为《星谱大陆》／ASTRAL SCORE；当前先不要做 Logo，也不要重新设计加载动画。请打开 `assets/handoff/2026-08-25/beetle-roadside-current.png`，先检查它是否适合作为 Nano Banana Pro 的唯一编辑底图，然后只继续“种荚型小甲虫”外形修复：甲虫保持很小、背对镜头、停在横向道路近侧的低草叶上，其他画面全部不动。

## 附录 A：下一步可直接复制的 Nano Banana Pro 提示词

```text
图1是唯一需要编辑的基础画面。

唯一修改目标：轻微改变中央小甲虫的身体外形，使它成为一种自然生长在奇幻世界中的小型昆虫。除甲虫之外，图1中的草叶、露珠、草丛、横向道路、远山、石拱、天空、云朵、光线、构图和画风全部保持不变。

严格保持甲虫现在的大小、位置、朝向和动作。甲虫仍然完全背对镜头，安静停在草叶尖端，不能放大，不能成为怪物或英雄主体。

甲虫外形调整：

保持圆润、短小、容易一眼辨认的甲虫基本结构，但不要再采用普通瓢虫式的完整椭圆背壳。

将两片红色鞘翅塑造成两片自然重叠的水滴形花瓣或种荚。鞘翅前端圆润，后端略微收尖并向外轻轻翘起，使背部轮廓形成非常柔和的双瓣形，而不是标准椭圆形。

两片鞘翅之间保留一道细窄的青绿色虹彩接缝。背壳下缘可以露出极小的一圈半透明青蓝色薄膜，像折叠收拢的昆虫翅膜，但不能展开成大翅膀。

将两根普通直触角改成短小的嫩芽形触角。触角末端只有一个微小、圆润的叶芽轮廓，略微向外弯曲，不能变成鹿角、长角或触手。

身体下方仍然只有六条细小昆虫腿，腿部结构简洁自然。脚尖可以带有非常小的圆形吸附软垫，用来抓住湿润草叶，但不能像机械零件。

配色保持朱红至莓红色背壳、极细青绿色虹彩边缘和少量淡金色星点。颜色和外形共同表达异世界属性，但不增加魔法核心、发光宝石、装甲板和复杂花纹。

整体轮廓必须保持简洁：缩略图中仍然是一只普通小虫子；放大后才能发现花瓣状背壳、嫩芽触角和折叠的虹彩翅膜。

严格禁止：

不要改变甲虫大小和位置，不要正脸和眼睛，不要巨大翅膀，不要蝴蝶造型，不要尖刺、巨角、钳子、利爪、铠甲、机械结构、宝石核心和强烈发光，不要增加腿或触角，不要把甲虫变成植物、花朵或精灵，不要修改图1其他任何区域。
```

## 十七、2026-08-26 最新同步：Midjourney 明快风格探索

### 用户最新确认的审美方向

用户整体更喜欢本次归档参考图的明快色调、空间通透感和厚涂方式：

- `assets/handoff/2026-08-26/mj-bright-style-reference.png`

确认要继承的是：

- 高明度、清澈的钴蓝／青蓝天空。
- 鲜亮的黄绿色草地与冷透明蓝绿色阴影。
- 朱红／宝石红作为集中视觉焦点。
- 中性偏白的明亮日光，而不是夕阳、橙黄滤镜或暖色电影调色。
- 大中型色块、选择性清晰边缘、可信三维空间上的精炼二维厚涂。
- 明快、轻松、充满新冒险期待的西方动画电影与英雄式卡通奇幻环境气质。

这张参考图的巨型装甲甲虫、纵向道路和中央首领式构图都不是目标，严禁作为内容继承。

### 本轮发现的两个提示词冲突

旧探索词中的以下结构会持续把画面带错：

1. `a narrow sunlit dirt road running from bottom center toward the exact central vanishing point` 会直接诱发“道路从镜头脚下通往中央消失点”的纵向道路，与已锁定的横向道路冲突。
2. `fantasy beetle + heroic MOBA key art + symmetrical center-follow composition` 容易把普通小甲虫英雄化为占满画面的巨型装甲怪物、螃蟹或 Boss。

新的语言原则：

> 环境与气氛承担英雄式奇幻语言；甲虫始终只是一个很小、普通、无害的路边昆虫。

### 最新锁定的空间结构

- 摄像机位于近侧高草内部，处于昆虫高度，正对道路另一侧拍摄。
- 小甲虫位于画面下方中央，约占画宽 5%–7%，停在一片带露珠的弧形草叶尖端，完全背对镜头。
- 草叶下方中央保留干净空间，给下一镜米露卡的脸从画面下方探出。
- 黄土路必须横贯画面中部，从左边缘连续延伸到右边缘，近似平行于画面上下边缘。
- 道路不能从画面底部出发，不能向中央消失点延伸，也不能成为纵向道路。
- 道路远侧只有一条狭窄、破碎的岩石路肩，随后立即出现明确的悬崖落差。
- 悬崖下方是开阔沟壑、层叠侵蚀地形与浅色岩壁；道路对面不能再是一整片连续草原。
- 沟壑远处为多层蓝绿色幻想山脉，重点使用细长、尖削、受风侵蚀、轻微弯曲的石脊和一处很小的残缺天然石拱。
- 云必须是自然的风拉伸积云：圆润云团加宽阔渐尖拖尾；不使用卷曲、螺旋、圆环、钩形、羽毛形或书法装饰云。

## 十八、最新版 Midjourney 探索提示词

下面这版用于继续探索“明快色调 + 横向道路 + 路后悬崖沟壑 + 幻想山脉”的完整画面。它是当前最新版，而不是最终生产定稿。

```text
Bright high-key fantasy adventure environment, viewed from insect height inside dense roadside grass. A tiny harmless jewel-red beetle, only 5–7% of the image width, rests naturally on the tip of one broad dew-covered grass blade at the lower center of the frame. The beetle is seen completely from behind, with a compact rounded body, closed smooth wing covers, tiny legs and two short antennae. It remains an ordinary delicate insect, not a hero, creature or monster.

The curved grass blade rises from the near foreground toward the lower center. Preserve a clean open pocket directly beneath the beetle and leaf, reserved for a character’s face rising into frame in the following shot.

The camera looks straight across a broad sunlit ochre dirt road. The road forms a flat horizontal band running continuously from the left edge to the right edge across the middle of the image, almost parallel to the top and bottom borders. The road does not begin at the camera, does not run toward the horizon and has no centered vanishing point.

Immediately beyond the far shoulder of the road is a narrow broken rocky verge followed by a clearly visible sharp cliff edge. The land drops abruptly into a broad open ravine with layered gullies, exposed pale stone faces and strong vertical depth. There is no continuous meadow or flat grassland beyond the road.

Across the ravine, layered blue-green fantasy mountain ranges rise through clean atmospheric perspective. Their silhouettes are distinctive and elegant: several tall slender wind-carved stone ridges, tapered blade-like peaks, gently leaning and naturally bending rock formations, plus one small broken natural stone arch far in the distance. The mountains feel ancient and otherworldly but remain part of a believable natural landscape.

Expansive brilliant azure-blue sky with large natural white cumulus cloud banks stretched softly by the wind. Rounded cloud masses with broad tapered trailing edges, airy irregular silhouettes and clean open blue spaces between them. The clouds remain recognizably natural, without ornamental curls or symbolic shapes.

Fresh saturated yellow-green grass, luminous cobalt and cyan sky, cool transparent blue-green shadows, vivid ruby-red beetle as the only concentrated red accent. Clear neutral-white late-morning sunlight, bright exposure, crisp color separation, clean breathable atmosphere, cheerful adventurous mood.

Refined heroic cartoon-fantasy MOBA environment key art, energetic Western animated-feature visual language, believable three-dimensional space rendered with sophisticated two-dimensional painterly brushwork, bold medium-to-large color shapes, selective crisp edges around the beetle and foreground leaf, softer simplified distant terrain, polished promotional illustration, controlled detail hierarchy.

The fantasy heroism belongs to the landscape and atmosphere; the beetle stays tiny, simple and harmless.

--ar 16:9 --s 130 --c 3 --no giant insect, monster beetle, armored beetle, horns, pincers, claws, weapons, glowing eyes, visible face, open wings, vertical road, road leading into distance, central road perspective, continuous meadow beyond road, forest wall, ordinary blocky canyon, curled clouds, spiral clouds, circular clouds, cloud rings, cloud hooks, feather-shaped clouds, calligraphic clouds, castle, city, tower, floating island, people, text, logo, black outlines, dark scene, sunset, orange color grading
```

## 十九、Midjourney 官网垫图与参数

### 垫图角色分工

1. 将构图最接近“横向道路 + 中央小甲虫”的当前底图放入 `Image Prompt`，让它约束构图和空间。
2. 将 `assets/handoff/2026-08-26/mj-bright-style-reference.png` 放入 `Style Reference`，只提取明快配色、通透天空和厚涂质感。
3. 不要把这张巨型甲虫参考放入 `Image Prompt` 或 `Omni Reference`，否则容易继承巨型怪物、纵向道路和中央压迫式构图。

### 建议起始设置

- Aspect Ratio：`16:9`
- Image Weight：`2–2.5`
- Style Weight：先用 `70`
- Stylization：`130`
- Variety：`3`
- Raw Mode：关闭

Style Weight 不要一开始开到 120 以上，因为该参考同时携带很强的巨型甲虫和纵向道路视觉结构。先用 70 只提取颜色与绘制语言；若风格仍不足，再依次试 90、110。每次只修改一个变量，方便判断效果来源。

## 二十、截至睡前的准确进度与明日续接

### 已确认

- 加载动画仍采用约 20 秒、加载未完成时循环、玩家可跳过的方案。
- 第一段从小甲虫视角与路边高草进入世界；之后米露卡探头，镜头再连接五人互动、悬崖世界揭示和甲虫回环。
- 加载 UI 位于底部，Logo 位于左上角，其他功能图标未来放在右侧竖列；当前阶段暂不制作 UI。
- 先做三张静态关键画面，再用静态母版生成视频，不直接把五张角色母版塞入视频模型碰运气。
- 视觉色调锁定为明快蓝天、鲜绿植被、中性白日光和冷透明阴影，不使用录屏中的暖橙色调。
- 砚秋是队伍中最高挑的成员，这是刻意设定，不应在群像中压缩她的身高。

### 仍是候选／尚未核验

- 本节最新版 MJ 提示词尚未生成新一轮结果，悬崖落差、幻想山脉、自然云形和小甲虫比例还需要以实际四宫格验证。
- `mj-bright-style-reference.png` 只被确认作为色彩和绘制语言参考，其内容、怪物设计和道路构图没有被确认。
- 还没有选出最终第一镜静态母版，也没有进入米露卡探头的正式合成。

### 明天到公司后的第一步

1. 在 MJ 官网按第十九节垫图并运行第十八节完整提示词。
2. 四宫格先只验收四个硬指标：道路是否横向；路后是否立刻断崖；山是否细长弯曲且具有幻想辨识度；云是否自然且无卷曲装饰。
3. 只有上述四项同时接近，才继续比较明快配色、甲虫大小和笔触；不要因为颜色漂亮就接受错误空间。
4. 若四张都出现同一种错误，修改提示词；若只有一张接近，优先对该张做 Vary Subtle，不要整套重来。
5. 第一镜构图和风格通过后，再转入 Nano Banana Pro 修正甲虫结构与朝向，随后加入米露卡。

明天给公司 Codex 的建议开场信息：

> 请先同步并阅读仓库根目录 `HANDOFF_2026-08-25_BRAND_AND_LOADING_LOOP.md` 的第十七至二十节。当前正在 Midjourney 官网探索第一镜静态母版：横向黄土路、路后立即出现悬崖沟壑、远处细长弯曲幻想石脊和天然石拱、自然无卷曲的白云、明快蓝绿白日色调。请先按第十八节提示词和第十九节垫图设置跑一轮四宫格；不要做 UI，不要直接生成视频，也不要把甲虫做成巨型装甲怪物。
