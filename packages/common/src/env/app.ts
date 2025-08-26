// 应用环境变量
import {AffiliateEnv} from "@microboat/common/env/affiliate";
import {AuthEnv} from "@microboat/common/env/auth";
import {MailEnv} from "@microboat/common/env/mail";
import {PaymentEnv} from "@microboat/common/env/payment";
import {StorageEnv} from "@microboat/common/env/storage";

export interface AppEnv {
    // Affiliate
    affiliate: AffiliateEnv;

    // 认证
    auth: AuthEnv;

    // 邮件
    mail: MailEnv;

    // 支付
    payment: PaymentEnv;

    // 存储
    storage: StorageEnv;
}
