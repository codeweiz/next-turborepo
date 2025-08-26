import {create} from "zustand/react";
import {AppConfig, UiThemeMode} from "@microboat/common";

// 应用配置状态
export interface AppConfigState {
    // 当前语言
    appConfig: AppConfig;

    // 设置当前语言
    setAppConfig: (_appConfig: AppConfig) => void;
}

// 默认应用配置
const defaultAppConfig: AppConfig = {
    i18n: {
        enabled: true,
        defaultLocale: 'en',
        locales: {
            en: {
                name: 'English'
            },
            zh: {
                name: '简体中文'
            }
        },
        localeCookieName: 'NEXT_LOCALE'
    },
    metadata: {
        name: 'Microboat',
        title: 'Microboat',
        description: 'Microboat',
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
        ]
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
    }
}

// 使用语言状态
export const useAppConfigStore = create<AppConfigState>((set) => (
    {
        appConfig: defaultAppConfig,
        setAppConfig: (_appConfig) => set(() => ({
            appConfig: _appConfig
        })),
    }
));
