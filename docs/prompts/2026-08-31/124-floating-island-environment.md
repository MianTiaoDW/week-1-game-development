# floating-island-environment

来源：对话消息 124（assistant）。

状态：历史环境方向，文生图＋风格参考。

---

对，这张的环境质感是目前比较对的一版：

- 岩石体块厚实；
- 植被与云层区分明确；
- 蓝天、暖光、青绿山谷的颜色关系舒服；
- 具有比较成熟的卡通3D加手绘收尾质感。

现在只修三个层面，不改整体美术语言：

1. 删除中景大浮空岛，所有岛屿推到远方。
2. 把太阳移出画面，只保留照明效果。
3. 加强明暗塑造，让悬崖和云层有更强的受光面、背光面。

## 基于原提示词的优化版

```text
Five tiny original fantasy adventurers seen from behind, standing on a narrow cliff in the lower-right quadrant, slightly below the horizontal center. Exactly five clearly separated silhouettes with different heights and body shapes, naturally staggered, the smallest traveler half a step behind. Travelers occupy less than 8% of the frame. Their cliff is the only foreground landform projecting into the open world.

Extreme long shot, remote elevated 18mm panoramic viewpoint. A vast bright fantasy valley and an ivory-white sea of clouds extend uninterrupted through the entire middle ground toward a very distant horizon. Occasional openings in the cloud sea reveal pale turquoise rivers, green valleys and layered mountain silhouettes far below.

No floating islands in the foreground or middle distance. All floating islands are located only in the extreme far background near the horizon, several kilometers away from the travelers.

One small but recognizable destination floating island appears slightly left of center near the distant horizon. It remains small in the frame, approximately 5% to 6% of the image width, with a compact green upper surface and a softly suggested tapered rock underside. Its details are simplified by pale cyan atmospheric perspective.

Two much smaller satellite floating islands appear near the destination island at different heights, each less than one third of its apparent size. The three islands are widely separated, low contrast and partially softened by distant morning haze. Broad open sky and cloud gaps surround all of them. No floating island overlaps the travelers, blocks the light or dominates the composition.

Clear fresh morning between 9 and 10 AM. The physical sun is outside the frame beyond the upper-left edge. The sun itself is never visible: no solar disk, no glowing orb, no starburst and no lens flare.

Strong clean directional morning sunlight enters from off-screen upper left, producing bold but natural light-and-shadow separation. Sun-facing rock planes receive bright warm cream and pale-gold highlights; opposite rock planes fall into clear cool blue-teal shadows with fully readable detail. Floating clouds have luminous warm-white tops, crisp directional edge lighting and soft pale-blue undersides.

A subtle atmospheric light corridor travels diagonally from the upper left across the distant valley toward the destination island and the five travelers. Thin warm rim light separates the travelers' shoulders, hair, hats and equipment from the bright cloud background. Soft reflected light from the cloud sea gently illuminates their shadow sides.

Bright azure-blue sky, thin high-altitude cloud streaks, sculpted luminous white cumulus, fresh emerald vegetation, warm sandstone cliffs, ivory cloud sea and pale cyan atmospheric distance. Balanced bright mid-key exposure with stronger directional contrast, readable shadows, controlled highlights, no crushed blacks and no blown white sky.

Heroic cartoon-fantasy MOBA world key art, painterly 3D finish with refined 2D hand-painted accents, substantial rock volume, clean designed vegetation groups, sculpted cloud masses, clear foreground-middle-background separation, optimistic adventure atmosphere, awe, companionship and a distant journey ahead.

Clean upper-center sky reserved for a future game logo. No text and no logo.

No visible sun, no starburst, no lens flare, no foreground floating island, no middle-distance floating island, no giant island, no island close to the camera, no island wider than 6% of the frame, no castle, no city, no tower, no giant tree, no cave, no continuous mountain wall, no crowded island field, no sixth person, no front-facing heroes, no text, no watermark.

--ar 16:9 --style raw --stylize 250 --chaos 3
```

这版最关键的变化不是简单增加“强烈光影”，而是明确规定物理表现：

- 左上画外光源；
- 岩石朝光面为暖金色；
- 背光面为可读的蓝青色；
- 云顶明亮、云底偏冷；
- 人物只有一圈克制的暖色轮廓光；
- 不显示太阳、星芒或镜头光斑。

这样能够保留当前图的明亮清新质感，同时获得更有MOBA美宣力度的光影，而不会重新变成日出海报。
