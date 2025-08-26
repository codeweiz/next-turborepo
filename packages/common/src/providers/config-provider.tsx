"use client";

import React, {
	createContext,
	useContext,
	useEffect,
	type ReactNode,
} from "react";
import type { Locale } from "next-intl";
import { AppConfig, UiThemeMode } from "../config";
import { AppConfigOverride, mergeConfigs } from "../types/config";
import { useAppConfigStore, useLocaleStore } from "@microboat/common/store";

// 默认应用配置
const defaultAppConfig: AppConfig = {
	i18n: {
		enabled: true,
		defaultLocale: "en",
		locales: {
			en: {
				name: "English",
			},
			zh: {
				name: "简体中文",
			},
		},
		localeCookieName: "NEXT_LOCALE",
	},
	metadata: {
		name: "Microboat",
		title: "Microboat",
		description: "Microboat",
		images: {
			logoLight: "/logo-light.svg",
			logoDark: "/logo-dark.svg",
			ogImage: "/og-image.png",
		},
		keywords: [
			"Next.js",
			"Starter Kit",
			"Next.js SaaS Template",
			"Next.js Boilerplate",
		],
	},
	setting: {
		account: {
			canChangeEmail: true,
		},
	},
	ui: {
		theme: {
			enabled: true,
			defaultMode: UiThemeMode.SYSTEM,
		},
	},
};

// Context 类型定义
interface ConfigContextType {
	config: AppConfig;
	currentLocale: Locale;
}

// 创建 Context
const ConfigContext = createContext<ConfigContextType | null>(null);

// Provider Props
interface ConfigProviderProps {
	children: ReactNode;
	configOverride?: AppConfigOverride;
	initialLocale?: Locale;
}

// Config Provider 组件
export function ConfigProvider({
	children,
	configOverride,
	initialLocale,
}: ConfigProviderProps) {
	const { initConfig } = useAppConfigStore();
	const { initLocale } = useLocaleStore();

	// 使用 useMemo 避免每次渲染都创建新对象
	const mergedConfig = React.useMemo(() => {
		return mergeConfigs(defaultAppConfig, configOverride);
	}, [configOverride]);

	// 使用 useMemo 确定初始语言
	const locale = React.useMemo(() => {
		return initialLocale || (mergedConfig.i18n.defaultLocale as Locale);
	}, [initialLocale, mergedConfig.i18n.defaultLocale]);

	// 使用 useRef 确保只初始化一次
	const initializedRef = React.useRef(false);

	// 初始化 stores - 只执行一次
	useEffect(() => {
		if (!initializedRef.current) {
			initConfig(mergedConfig);
			initLocale(locale);
			initializedRef.current = true;
		}
	}, []);

	const contextValue: ConfigContextType = React.useMemo(
		() => ({
			config: mergedConfig,
			currentLocale: locale,
		}),
		[mergedConfig, locale],
	);

	return (
		<ConfigContext.Provider value={contextValue}>
			{children}
		</ConfigContext.Provider>
	);
}

// 使用 Config Context 的 hook
export function useConfigContext() {
	const context = useContext(ConfigContext);

	if (!context) {
		throw new Error("useConfigContext must be used within a ConfigProvider");
	}

	return context;
}
