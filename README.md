# 學習筆記｜從零開始的圖解教學

給新手的繁體中文圖解教學，我每學一個新主題就整理一篇放上來。用 [Astro Starlight](https://starlight.astro.build/) 建置，部署在 GitHub Pages。

🌐 網站：https://evanlin-data.github.io/learning-notes/

## 目前的教學

| 主題 | 教學 | 程度 |
|---|---|---|
| Git & GitHub | Git & GitHub 從零開始 | 入門 |
| Git & GitHub | GitHub Git Guides 重點整理 | 複習 |
| AI 與 Agent | AI Agent 學習路線（10 站） | 進階 |

每篇都有圖解、可一鍵複製的指令、進度清單和小測驗。進度只存在讀者自己的瀏覽器裡，不會上傳。

## 資料夾結構

```
learning-notes/
├── astro.config.mjs          網站設定：標題、側邊欄（新增頁面要在這裡登記）
├── src/
│   ├── content/docs/         ⭐ 所有文章都在這裡，一個 .mdx 檔就是一頁
│   │   ├── index.mdx         首頁
│   │   ├── git/
│   │   └── ai-agent/
│   ├── components/           可重用元件：Quiz、Checklist、Diagram
│   ├── diagrams/             SVG 圖解
│   └── styles/custom.css     顏色和字體
├── public/                   原封不動複製到網站的檔案（favicon）
└── .github/workflows/        push 之後自動部署的設定
```

## 在自己電腦上預覽

第一次需要安裝 Node.js（Mac：`brew install node`）。

```bash
npm install        # 只有第一次需要
npm run dev        # 打開 http://localhost:4321/learning-notes/ ，存檔就會自動更新
```

## 新增一篇教學

1. 在 `src/content/docs/` 底下建一個 `.mdx` 檔，例如 `sql/basics.mdx`。檔案路徑就是網址：`/sql/basics/`。
2. 檔案開頭寫標題和說明：
   ```mdx
   ---
   title: SQL 從零開始
   description: 一句話說明這篇在教什麼
   ---
   ```
3. 在 `astro.config.mjs` 的 `sidebar` 加上這一頁（新主題就新增一個群組）。
4. 在首頁 `src/content/docs/index.mdx` 加一張 `LinkCard`。
5. 本機 `npm run dev` 看過沒問題，就 commit、push，大約 1–2 分鐘後網站會自動更新。

### 可以用的元件

在 `.mdx` 檔案開頭 import 之後就能用（路徑依檔案位置調整 `../` 的數量）：

```mdx
import Quiz from '../../../components/Quiz.astro';
import Checklist from '../../../components/Checklist.astro';
import Diagram from '../../../components/Diagram.astro';

<Checklist id="sql-basics" items={['安裝好資料庫', '跑出第一個 <code>SELECT</code>']} />

<Quiz id="sql-basics" questions={[
  { q: '題目', options: ['選項 A', '選項 B'], answer: 1, explain: '解釋（answer 從 0 開始算）' },
]} />

<Diagram name="檔名不含-svg" caption="圖說" />
```

提示框用 Starlight 內建的語法：

```md
:::tip[標題]
內容
:::
```

可用的種類有 `note`、`tip`、`caution`、`danger`。

> `Checklist` 和 `Quiz` 的 `id` 必須全站唯一，改了 id 讀者的舊進度就會不見。

## 授權

- 文字與圖解：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hant)，歡迎分享與改作，請註明出處。
- 程式碼範例：MIT License。
- 《GitHub Git Guides 重點整理》整理自 [GitHub Git Guides](https://github.com/git-guides)，原文版權屬於 GitHub。
