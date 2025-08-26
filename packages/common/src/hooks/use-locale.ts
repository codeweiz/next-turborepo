import type { Locale } from "next-intl";
import { useLocaleStore } from "@microboat/common/store";
import { useConfigContext } from "@microboat/common/providers";

// 使用语言配置的组合 hook
export function useLocale() {
	const { currentLocale, setCurrentLocale } = useLocaleStore();
	const { currentLocale: contextLocale } = useConfigContext();

	// 优先使用 store 中的语言，如果没有则使用 context 中的默认语言
	const locale = currentLocale || contextLocale;

	return {
		currentLocale: locale,
		setCurrentLocale,
		// 便捷方法：切换语言
		switchLocale: (newLocale: Locale) => {
			setCurrentLocale(newLocale);
		},
	};
}
