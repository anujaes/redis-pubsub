import { Redis } from 'ioredis';
import { redisConnection } from '../config/redis.config';

class RedisPublisher {
    private redisClient: Redis;

    constructor() {
        this.redisClient = new Redis(redisConnection.connection);

        this.redisClient.on('error', (err) => {
            console.error('❌ Redis Publisher Error:', err);
        });

        console.log(`✅ Redis Publisher connected to ${redisConnection.connection.host}:${redisConnection.connection.port}`);
    }

    /**
     * Publish a message to a given channel dynamically
     * @param channel - The Redis channel name
     * @param message - The message to publish
     */
    public async publish(channel: string, message: string): Promise<void> {
        try {
            await this.redisClient.publish(channel, JSON.stringify(message));
            console.log(`📢 Published message: "${message}" on channel: "${channel}"`);
        } catch (error) {
            console.error(`❌ Error publishing message to channel "${channel}":`, error);
        }
    }
}

export default new RedisPublisher();
