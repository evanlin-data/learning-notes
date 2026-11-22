# 學習筆記｜從零開始的圖解教學

給新手的繁體中文圖解教學，我每學一個新主題就整理一篇放上來。

🌐 網站：https://your-name.github.io/learning-notes/

## 目前的教學

| 主題 | 教學 | 程度 |
|---|---|---|
| Git & GitHub | [Git & GitHub 從零開始](git/git-github-basics.html) | 入門 |
| Git & GitHub | [GitHub Git Guides 重點整理](git/git-guides-notes.html) | 複習 |
| AI 與 Agent | [AI Agent 學習路線](ai/ai-agent-roadmap.html) | 進階 |

每篇都有圖解、可一鍵複製的指令、進度清單和小測驗。進度只存在讀者自己的瀏覽器裡，不會上傳。

## 資料夾結構

```
learning-notes/
├── index.html          首頁（教學目錄）
├── assets/
│   ├── site.css        共用的「回首頁」列樣式
│   └── favicon.svg
├── git/                Git & GitHub 主題
├── ai/                 AI 與 Agent 主題
└── .nojekyll           讓 GitHub Pages 直接提供檔案，不經過 Jekyll
```

## 新增一篇教學

1. 把新的 HTML 放進對應主題的資料夾，沒有合適的就新增一個資料夾，例如 `sql/`。
2. 在新頁面的 `<head>` 加上共用樣式和圖示：
   ```html
   <link rel="icon" href="../assets/favicon.svg">
   <link rel="stylesheet" href="../assets/site.css">
   ```
3. 在 `<body>` 的第一行加上回首頁的列：
   ```html
   <div class="sitebar"><a href="../">← 回到學習筆記首頁</a><span>主題名稱</span></div>
   ```
4. 在 `index.html` 複製一張 `<a class="card">` 卡片，改標題、說明和連結。
5. 更新這份 README 的表格，然後 commit、push。

> 如果頁面有用 `localStorage` 存進度，請用一個獨一無二的 key（例如 `sql-basics-v1`），避免跟其他教學衝突。

## 授權

- 文字與圖解：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh-hant)，歡迎分享與改作，請註明出處。
- 程式碼範例：MIT License。
- 《GitHub Git Guides 重點整理》整理自 [GitHub Git Guides](https://github.com/git-guides)，原文版權屬於 GitHub。
