import { Redis } from 'ioredis';
import { redisConnection } from '../config/redis.config';
import messageService from '../services/services';

class RedisSubscriber {
    private redisClient: Redis;
    private channels: string[];

    constructor(channels: string[]) {
        this.redisClient = new Redis(redisConnection.connection);
        this.channels = channels;

        this.redisClient.on('error', (err) => {
            console.error('❌ Redis Subscriber Error:', err);
        });

        this.subscribeToChannels();
    }

    /**
     * Subscribe to multiple Redis channels dynamically
     */
    private async subscribeToChannels(): Promise<void> {
        await this.redisClient.subscribe(...this.channels, (err, count) => {
            if (err) {
                console.error(`❌ Failed to subscribe to channels: ${err.message}`);
            } else {
                console.log(`✅ Redis Subscribed to ${count} channels: ${this.channels.join(', ')}`);
            }
        });

        this.redisClient.on('message', (channel, message) => {
            console.log(`📩 Received message on "${channel}": ${message}`);
            this.processMessage(channel, message);
        });
    }

    /**
     * Handle received messages from subscribed channels
     * @param channel - The Redis channel
     * @param message - The received message
     */
    private async processMessage(channel: string, message: string): Promise<void> {
        try {
            // add your handlers here
            switch (channel) {
                case process.env.SUBSCRIBER_CHANNEL_A:
                    messageService.processMessageA(message);
                    break;
                
                case process.env.SUBSCRIBER_CHANNEL_B:
                    messageService.processMessageB(message);
                    break;

                default:
                    console.warn(`⚠️ No handler for channel: ${channel}`);
            }

        } catch (error) {
            console.error(`❌ Error processing message from ${channel}:`, error);
        }
    }
}

// Export function to initialize with dynamic channels
export const initializeSubscriber = (channels: string[]) => new RedisSubscriber(channels);
