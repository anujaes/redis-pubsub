import { RedisOptions } from "ioredis";

class RedisConfig {
    private config: RedisOptions;

    constructor() {
        this.config = {
            host: process.env.REDIS_HOST!,
            port: Number(process.env.REDIS_PORT!),
        };
    }

    public getConfig(): RedisOptions {
        return this.config;
    }
}

export const redisConnection = { connection: new RedisConfig().getConfig() };
