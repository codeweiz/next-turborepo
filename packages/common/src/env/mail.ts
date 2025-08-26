// 邮件环境变量
export interface MailEnv {
	// 提供商
	provider: "resend" | "plunk";

	// 发送者
	from: string;

	// 接受者
	contact: string;
}
