// 元数据配置
export interface MetadataConfig {
	// 名称
	name: string;

	// 标题
	title: string;

	// 描述
	description: string;

	// 图片
	images: Record<ImageType, string>;

	// 关键词
	keywords: string[];
}

// 图片类型
export enum ImageType {
	LOGO_LIGHT = "logoLight",
	LOGO_DARK = "logoDark",
	OG_IMAGE = "ogImage",
}
