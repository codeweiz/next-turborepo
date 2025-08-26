import type {Locale} from "next-intl";
import {create} from "zustand/react";
import {useAppConfigStore} from "@microboat/common/store/use-app-config-store";

// 语言状态
export interface LocaleState {
    // 当前语言
    currentLocale: Locale;

    // 设置当前语言
    setCurrentLocale: (locale: Locale) => void;
}

// 使用语言状态
export const useLocaleStore = create<LocaleState>((set) => ({
    currentLocale: useAppConfigStore().appConfig.i18n.defaultLocale as Locale,
    setCurrentLocale: (locale) => set(() => ({
        currentLocale: locale
    })),
}));
