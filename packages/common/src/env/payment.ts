// 支付环境变量
export interface PaymentEnv {
    // 提供商
    provider: PaymentProvider;

    // 货币
    currency: string;

    // 年付折扣
    yearlyDiscount: number;

    // 付款后重定向路由
    redirectAfterCheckout: string;

    // 价格计划
    plans: Record<string, Partial<PricePlan>>
}

// 价格计划
export interface PricePlan {
    // ID
    id: string;

    // 名称
    name: string;

    // 描述
    description: string;

    // 特征
    features: string[];

    // 价格
    prices: Partial<Price>[];

    // 是否免费
    isFree: boolean;

    // 是否终生
    isLifetime: boolean;

    // 是否企业级
    isEnterprise: boolean;

    // 是否受欢迎
    popular: boolean;

    // 是否高亮
    highlighted: boolean;
}

// 价格
export interface Price {
    // 类型
    type: PaymentType;

    // 价格 ID
    priceId: string;

    // 数量
    amount: number;

    // 周期
    interval: PlanInterval;

    // 试用天数
    trialPeriodDays: number;
}

// 支付类型
export enum PaymentType {
    // 订阅
    SUBSCRIPTION = 'subscription',

    // 一次性
    ONE_TIME = 'one-time'
}

// 计划周期
export enum PlanInterval {
    MONTH = 'month',
    YEAR = 'year'
}

// 支付提供商枚举
export enum PaymentProvider {
    STRIPE = 'stripe',
    CREEM = 'creem'
}
