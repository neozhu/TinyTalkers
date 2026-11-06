# Design System & Visual Guidelines: TinyTalkers

## 1. Design Direction: Sophisticated Warmth (现代温润美学)
- **Design Philosophy**: 告别生硬粗暴的 AI 模板化高饱和对比与乱用 Emoji 杂色，采用温暖、高质感、极具亲和力的教育品牌视觉。
- **Craft Floor Compliance**:
  - 严禁 Emoji 充当正式图标系统：全站采用统一的 Lucide 图标库（统一 1.75px 或 2px 描边与语义化配色）。
  - 彻底杜绝“幽灵卡片”：明确单一层次声明（纯微阴影 `shadow-sm hover:shadow-md` 或精致浅边框 `border border-amber-900/10`，不叠加生硬多重边框）。
  - 页面呼吸节奏与层级：标题上方留白大于下方留白，内容宽度规范在 65–75ch 以保证中文阅读舒适度。
  - 浏览器表面细化：定制 `::selection` 主题高亮、平滑滚动条、统一的 focus-visible 焦点环。

## 2. Color Palette & Tokens
- **Brand Primary (活力暖阳珊瑚红)**:
  - `primary`: `#F05A47` / `oklch(0.63 0.22 28.5)`
  - `primary-hover`: `#DE4936`
  - `primary-light`: `#FEF2F0`
- **Surface & Backgrounds (暖润天然纸质底色)**:
  - `background-page`: `#FFFDF9` (暖调米白，告别冰冷惨白，保护视力与提升温润质感)
  - `surface-card`: `#FFFFFF`
  - `surface-subtle`: `#F8F6F0`
- **Stage Signature Accents (三大分龄阶梯语义色)**:
  - 启蒙期（3–6岁）: **晨曦暖黄 / 琥珀橙** (`#F59E0B` / `#FEF3C7`) —— 象征萌芽与纯真趣味
  - 系统学习期（6–10岁）: **青竹森绿 / 薄荷青** (`#10B981` / `#D1FAE5`) —— 象征成长生机与系统建构
  - 强化期（10岁+）: **蔚蓝智慧 / 稳重深蓝** (`#3B82F6` / `#DBEAFE`) —— 象征学术视野与卓越成就
- **Neutral Text Hierarchy**:
  - 主标题与重要文字: `#1E293B` (Slate 900, 柔和深碳灰)
  - 正文与说明文字: `#475569` (Slate 600)
  - 辅助与注脚文字: `#64748B` (Slate 500, 对比度 ≥ 4.5:1)

## 3. Typography
- **Font Stack**: `system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`
- **Headings**:
  - `H1`: 3rem (48px) ~ 3.75rem (60px), 紧凑行高 1.15, 字重 font-extrabold / font-black
  - `H2`: 2rem (32px) ~ 2.5rem (40px), 行高 1.25, 字重 font-bold
  - `H3`: 1.25rem (20px) ~ 1.5rem (24px), 行高 1.35, 字重 font-semibold
- **Body**: 1rem (16px), 行高 1.65, 字重 font-normal

## 4. Components & Elevation System
- **Hero Section**: 视觉重心重构，打造极具亲和力与转化力的多维度互动卡片（外教发音音频体验/趣味互动插画徽章/真实学员成长指标），拒绝单调 Emoji 占位图。
- **Course System**: 三大阶段卡片采用阶梯感微差异化设计，强调分龄教学对比，信息结构紧凑且重点突出。
- **Course Schedule**: 淘汰 Emoji，采用 Lucide 矢量图标系统，配合平滑切换的月度时间轴/卡片网格。
- **Testimonials**: 真实家长头像徽章（首字优雅字标 / 矢量母婴亲子图符），双行无缝滚动跑马灯 + 鼠标悬停暂停。
- **Booking Form**: 聚焦转化体验，增加信任背书（免费试听保障、隐私承诺、极速顾问响应），输入框具有精致的微聚焦态。
