// UI 配置
export interface UiConfig {
    // 主题
    theme: UiTheme
}

// UI 主题
export interface UiTheme {
    // 是否启用
    enabled: boolean;

    // 默认模式
    defaultMode: UiThemeMode
}

// UI 主题模式
export enum UiThemeMode {
    // 跟随系统
    SYSTEM = 'system',

    // 亮色
    LIGHT = 'light',

    // 暗色
    DARK = 'dark'
}
