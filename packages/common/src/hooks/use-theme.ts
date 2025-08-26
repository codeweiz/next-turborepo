import { useAppConfig } from "./use-app-config";
import { UiThemeMode } from "../config/ui";

// 使用主题配置的组合 hook
export function useTheme() {
	const { config, updateConfig } = useAppConfig();

	const themeConfig = config.ui.theme;

	return {
		// 主题配置
		enabled: themeConfig.enabled,
		defaultMode: themeConfig.defaultMode,

		// 便捷方法：切换主题模式
		setThemeMode: (mode: UiThemeMode) => {
			updateConfig({
				ui: {
					...config.ui,
					theme: {
						...themeConfig,
						defaultMode: mode,
					},
				},
			});
		},

		// 便捷方法：切换主题启用状态
		setThemeEnabled: (enabled: boolean) => {
			updateConfig({
				ui: {
					...config.ui,
					theme: {
						...themeConfig,
						enabled,
					},
				},
			});
		},
	};
}
