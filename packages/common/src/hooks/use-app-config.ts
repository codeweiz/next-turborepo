import { useAppConfigStore } from "@microboat/common/store";
import { useConfigContext } from "@microboat/common/providers";

// 使用应用配置的组合 hook
export function useAppConfig() {
	const { appConfig, updateConfig } = useAppConfigStore();
	const { config: contextConfig } = useConfigContext();

	// 优先使用 store 中的配置，如果没有则使用 context 中的默认配置
	const currentConfig = appConfig || contextConfig;

	return {
		config: currentConfig,
		updateConfig,
	};
}
