"use client";

import { useAppConfig, useLocale, useTheme } from "@microboat/common";
import { UiThemeMode } from "@microboat/common";

export default function Page() {
	const { config } = useAppConfig();
	const { currentLocale, switchLocale } = useLocale();
	const { defaultMode, setThemeMode } = useTheme();

	return (
		<div style={{ padding: "2rem" }}>
			<h1>配置测试页面</h1>

			<div style={{ marginBottom: "2rem" }}>
				<h2>应用配置测试</h2>
				<p>
					<strong>应用名称:</strong> {config.metadata.name}
				</p>
				<p>
					<strong>应用标题:</strong> {config.metadata.title}
				</p>
				<p>
					<strong>应用描述:</strong> {config.metadata.description}
				</p>
				<p>
					<strong>关键字:</strong> {config.metadata.keywords?.join(", ")}
				</p>
				<p>
					<strong>允许修改邮箱:</strong>{" "}
					{config.setting.account.canChangeEmail ? "是" : "否"}
				</p>
			</div>

			<div style={{ marginBottom: "2rem" }}>
				<h2>语言配置测试</h2>
				<p>
					<strong>当前语言:</strong> {currentLocale}
				</p>
				<p>
					<strong>可用语言:</strong>
				</p>
				<div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
					{Object.entries(config.i18n.locales).map(([locale, info]) => (
						<button
							key={locale}
							onClick={() => switchLocale(locale as any)}
							style={{
								padding: "0.5rem 1rem",
								backgroundColor:
									currentLocale === locale ? "#0070f3" : "#f0f0f0",
								color: currentLocale === locale ? "white" : "black",
								border: "none",
								borderRadius: "4px",
								cursor: "pointer",
							}}
						>
							{info.name}
						</button>
					))}
				</div>
			</div>

			<div style={{ marginBottom: "2rem" }}>
				<h2>主题配置测试</h2>
				<p>
					<strong>当前主题模式:</strong> {defaultMode}
				</p>
				<p>
					<strong>主题功能:</strong> {config.ui.theme.enabled ? "启用" : "禁用"}
				</p>
				<div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
					{Object.values(UiThemeMode).map((mode) => (
						<button
							key={mode}
							onClick={() => setThemeMode(mode)}
							style={{
								padding: "0.5rem 1rem",
								backgroundColor: defaultMode === mode ? "#0070f3" : "#f0f0f0",
								color: defaultMode === mode ? "white" : "black",
								border: "none",
								borderRadius: "4px",
								cursor: "pointer",
							}}
						>
							{mode}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
