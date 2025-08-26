// 存储环境变量
export interface StorageEnv {
	// 提供商
	provider: string;

	// 存储桶名称
	bucketNames: Record<string, string>;
}
