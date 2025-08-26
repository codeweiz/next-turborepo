import type { AppConfigOverride } from "@microboat/common";

// Web 应用的配置覆盖
export const webAppConfig: AppConfigOverride = {
	metadata: {
		name: "Web应用",
		title: "Microboat Web应用",
		description: "基于 Next.js 的 Web 应用",
		keywords: ["Web App", "Next.js", "Microboat", "React"],
	},
	i18n: {
		defaultLocale: "zh",
		locales: {
			zh: {
				name: "中文",
			},
			en: {
				name: "English",
			},
		},
	},
	setting: {
		account: {
			canChangeEmail: false, // Web 应用不允许修改邮箱
		},
	},
};
