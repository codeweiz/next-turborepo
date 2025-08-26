import type { PropsWithChildren } from "react";
import { ConfigProvider } from "@microboat/common";
import { webAppConfig } from "../config/app-config";

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="zh">
			<body>
				<ConfigProvider configOverride={webAppConfig} initialLocale="zh">
					{children}
				</ConfigProvider>
			</body>
		</html>
	);
}
