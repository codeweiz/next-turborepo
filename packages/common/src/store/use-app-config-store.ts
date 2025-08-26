import { create } from "zustand/react";
import type { AppConfig } from "../config/app";

// 应用配置状态
export interface AppConfigState {
	// 当前应用配置
	appConfig: AppConfig | null;

	// 初始化配置
	initConfig: (config: AppConfig) => void;

	// 更新配置
	updateConfig: (config: Partial<AppConfig>) => void;
}

// 应用配置状态管理
export const useAppConfigStore = create<AppConfigState>((set, get) => ({
	appConfig: null,

	initConfig: (config) =>
		set(() => ({
			appConfig: config,
		})),

	updateConfig: (partialConfig) =>
		set(() => {
			const currentConfig = get().appConfig;
			if (!currentConfig) return { appConfig: null };

			return {
				appConfig: { ...currentConfig, ...partialConfig },
			};
		}),
}));
