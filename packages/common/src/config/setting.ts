// 系统设置
export interface SettingConfig {
	// 账户设置
	account: Account;
}

// 账户设置
export interface Account {
	// 能否修改邮箱
	canChangeEmail: boolean;
}
