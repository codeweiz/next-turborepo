import type { Locale } from "next-intl";
import { create } from "zustand/react";

// 语言状态
export interface LocaleState {
	// 当前语言
	currentLocale: Locale | null;

	// 初始化语言
	initLocale: (locale: Locale) => void;

	// 设置当前语言
	setCurrentLocale: (locale: Locale) => void;
}

// 语言状态管理
export const useLocaleStore = create<LocaleState>((set) => ({
	currentLocale: null,

	initLocale: (locale) =>
		set(() => ({
			currentLocale: locale,
		})),

	setCurrentLocale: (locale) =>
		set(() => ({
			currentLocale: locale,
		})),
}));
