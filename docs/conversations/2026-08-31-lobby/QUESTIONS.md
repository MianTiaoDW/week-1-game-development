# 规划问答原文

## 1. 2026-08-29T09:40:21.615Z

```json
{"questions":[{"id":"ui_temperament","header":"UI主气质","question":"《星谱大陆》第一次打开时，你最希望玩家感到哪一种气质？","options":[{"label":"明亮远行绘本（推荐）","description":"以浅蓝、象牙白、日光橙为骨架，像轻快的奇幻旅团；最适合探索跑酷。"},{"label":"深空星术冒险","description":"以深蓝、星光、古金为骨架，保留当前图的史诗感，但更接近传统奇幻 RPG。"},{"label":"鲜明图形冒险","description":"用高识别色块、粗图标和动态路线强化速度感，辨识度高但少些电影奇幻感。"}]}]}
```

回答：

```json
{"answers":{"ui_temperament":{"answers":["明亮远行绘本（推荐）"]}}}
```

## 2. 2026-08-29T09:41:47.232Z

```json
{"questions":[{"id":"surface_language","header":"器物语言","question":"这套旅行工具更应该像什么？","options":[{"label":"路线图与探险标记（推荐）","description":"以路径、坐标、旗标、节点和小型装备扣件组织；自然服务地图与跑酷 HUD。"},{"label":"手帐与贴纸收藏","description":"更亲密可爱，适合角色档案和收集，但需克制以免太像休闲换装游戏。"},{"label":"野外装备与魔法仪器","description":"更有冒险质感，但会把界面拉回深色器物和传统 RPG。"}]}]}
```

回答：

```json
{"answers":{"surface_language":{"answers":["路线图与探险标记（推荐）"]}}}
```

## 3. 2026-08-29T09:42:24.697Z

```json
{"questions":[{"id":"first_screen","header":"首个验证页","question":"第一张完整概念页要先做哪一页？","options":[{"label":"关卡地图（推荐）","description":"最能体现“路线图与探险标记”，也能建立营地、关卡、进度的整体系统。"},{"label":"角色选择","description":"可复用已有美宣，但它只能验证沉浸式边缘 UI，不能证明整套功能系统。"},{"label":"跑酷 HUD","description":"直接服务玩法，但基础输入、失败与收集规则尚未锁定，容易过早定细节。"}]}]}
```

回答：

```json
{"answers":{"first_screen":{"answers":["先做大厅吧，然后我是希望参考《剑与远征》还有《出发吧麦芬》这种奇幻世界冒险风格的游戏的 UI"]}}}
```

## 4. 2026-08-29T09:44:15.540Z

```json
{"questions":[{"id":"lobby_presentation","header":"大厅表现","question":"大厅中心画面希望用哪种表现形式？","options":[{"label":"2.5D 旅团营地（推荐）","description":"手绘/CG 场景配小型动态角色、景深与分层视差；复用现有美术方向，制作风险可控。"},{"label":"实时 3D 可走动营地","description":"沉浸感最高，但需要完整 3D 场景、角色、镜头和交互资产，首版工作量会大幅增加。"},{"label":"星图桌面与旅行册","description":"以地图和纸面为中心，开发更快，但会削弱“进入奇幻世界”的第一印象。"}]}]}
```

回答：

```json
{"answers":{"lobby_presentation":{"answers":["可以选第一个 2.5D 旅团营地。不过我这个游戏是横屏的，大厅背景我希望后面能自己生成动画放进去，UI 覆盖在动画上面。"]}}}
```

## 5. 2026-08-29T09:46:00.054Z

```json
{"questions":[{"id":"lobby_primary_action","header":"大厅主行动","question":"进入大厅后，最醒目的主行动应当是什么？","options":[{"label":"继续星路（推荐）","description":"直接进入上次关卡或星图，最符合关卡制横版冒险跑酷的主循环。"},{"label":"查看旅团","description":"先走角色与营地氛围，叙事更强，但会弱化“马上出发”的游戏节奏。"},{"label":"打开星图","description":"让玩家先选路线，自由感更强，但多了一步才能开始关卡。"}]}]}
```

回答：

```json
{"answers":{"lobby_primary_action":{"answers":["进入大厅后，最醒目的当然是“继续行路”，也就是继续游戏的按钮。其他功能比如切换角色页面（查看角色详情）、冒险手册等，都是正常的功能，但最醒目的就是这个继续关卡。"]}}}
```

## 6. 2026-08-29T09:47:03.796Z

```json
{"questions":[{"id":"secondary_navigation","header":"功能入口","question":"大厅里的角色、旅册等次级功能入口，你更喜欢怎样出现？","options":[{"label":"场景热点 + 底部小导航（推荐）","description":"点击营地内角色/物件可进入对应功能，同时保留精简底栏，兼顾沉浸与易用。"},{"label":"只用底部小导航","description":"最清晰稳妥，但大厅会更像传统手游首页。"},{"label":"只用场景热点","description":"沉浸感最强，但第一次使用时可能不易发现，也不利于快速切换。"}]}]}
```

回答：

```json
{"answers":{"secondary_navigation":{"answers":["功能就正常有一个入口按钮，UI 放在视频背景上面。不然按你第一个推荐那样实现太麻烦了，还得为选择角色或物件进入功能的过程重新生成动画。我直接做好一个固定的 UI 入口，就像《王者荣耀》那样，不同的 UI 点击进去就是不同的入口，这样不是更方便吗？"]}}}
```
