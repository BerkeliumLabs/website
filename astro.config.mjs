// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Berkelium',
			logo: {
				src: './src/assets/berkelium_logo.png',
				replacesTitle: true,
			},
			favicon: '/favicon.png',
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BerkeliumLabs/Berkelium-dev' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Core Concepts', slug: 'guides/concepts' },
						{ label: 'Leiden Clustering', slug: 'guides/clustering' },
						{ label: 'AI Integration', slug: 'guides/ai-integration' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'MCP Tools', slug: 'reference/mcp-tools' },
						{ label: 'CLI Commands', slug: 'reference/cli-commands' },
					],
				},
			],
		}),
	],
});
