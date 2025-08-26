// 认证环境变量
export interface AuthEnv {
    // 是否启用社交登录
    enableSocialLogin: boolean

    // 是否启用密码登录
    enablePasswordLogin: boolean;

    // 登陆后重定向路由
    redirectAfterSignIn: string;

    // 登出后重定向路由
    redirectAfterLogout: string;
}
