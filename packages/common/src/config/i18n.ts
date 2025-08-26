// i18n 配置
export interface I18nConfig {
	// 是否启用
	enabled: boolean;

	// 默认语言
	defaultLocale: string;

	// 语言配置
	locales: Record<string, Locale>;

	// cookie 名称
	localeCookieName: string;
}

// 语言配置项
export interface Locale {
	name: string;
}
