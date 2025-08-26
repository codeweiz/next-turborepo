import {I18nConfig} from "@microboat/common/config/i18n";
import {MetadataConfig} from "@microboat/common/config/metadata";
import {SettingConfig} from "@microboat/common/config/setting";
import {UiConfig} from "@microboat/common/config/ui";

// 应用配置
export interface AppConfig {
    // i18n 多语言
    i18n: I18nConfig;

    // 元数据
    metadata: MetadataConfig;

    // 系统设置
    setting: SettingConfig;

    // UI
    ui: UiConfig;
}
