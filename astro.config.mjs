// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub 帳號名稱：換帳號時只要改這一行
const GITHUB_USER = 'evanlin-data';
const REPO = 'learning-notes';

export default defineConfig({
	site: `https://${GITHUB_USER}.github.io`,
	base: `/${REPO}`,
	integrations: [
		starlight({
			title: '學習筆記',
			description: '給新手的繁體中文圖解教學：Git、GitHub、AI Agent。每篇都有圖解、可直接複製的指令、練習清單和小測驗。',
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales: {
				root: { label: '繁體中文', lang: 'zh-TW' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: `https://github.com/${GITHUB_USER}/${REPO}` },
			],
			editLink: {
				baseUrl: `https://github.com/${GITHUB_USER}/${REPO}/edit/main/`,
			},
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Git & GitHub',
					items: [
						{ label: 'Git & GitHub 從零開始', slug: 'git/basics' },
						{ label: 'Git Guides 重點整理', slug: 'git/guides' },
					],
				},
				{
					label: 'AI Agent 學習路線',
					items: [
						{ label: '路線總覽', slug: 'ai-agent' },
						{ label: '0 起點：Agent 是什麼', slug: 'ai-agent/what-is-agent' },
						{ label: '1 LLM 與 Prompt', slug: 'ai-agent/llm-prompt' },
						{ label: '2 用程式叫 AI', slug: 'ai-agent/api' },
						{ label: '3 Tool Use', slug: 'ai-agent/tool-use' },
						{ label: '4 Agent Loop', slug: 'ai-agent/agent-loop' },
						{ label: '5 MCP', slug: 'ai-agent/mcp' },
						{ label: '6 Skills', slug: 'ai-agent/skills' },
						{ label: '7 RAG 與記憶', slug: 'ai-agent/rag-memory' },
						{ label: '8 評估與安全', slug: 'ai-agent/eval-safety' },
						{ label: '9 畢業專案', slug: 'ai-agent/capstone' },
						{ label: '總結與資源', slug: 'ai-agent/wrap-up' },
					],
				},
			],
		}),
	],
});
