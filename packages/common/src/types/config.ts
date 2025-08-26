import type { AppConfig } from "../config/app";

// 深度可选类型工具
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 配置覆盖类型
export type AppConfigOverride = DeepPartial<AppConfig>;

// 配置合并工具函数
export function mergeConfigs(
	defaultConfig: AppConfig,
	override?: AppConfigOverride,
): AppConfig {
	if (!override) return defaultConfig;

	// @ts-ignore
	return <AppConfig>deepMerge(defaultConfig, override);
}

// 深度合并函数
function deepMerge<T extends Record<string, any>>(
	target: T,
	source: Partial<T>,
): T {
	const result = { ...target };

	for (const key in source) {
		if (source[key] !== undefined) {
			if (isObject(target[key]) && isObject(source[key])) {
				result[key] = deepMerge(target[key], source[key]);
			} else {
				result[key] = source[key] as T[typeof key];
			}
		}
	}

	return result;
}

function isObject(item: unknown): item is Record<string, any> {
	return item !== null && typeof item === "object" && !Array.isArray(item);
}
