import { createClient, RedisClientType } from 'redis';
import logger from '../utils/logger';

export let redisClient: RedisClientType | undefined;

export const connectRedis = async () => {
    try {
        redisClient = createClient();
        redisClient.on("error", (error: any) => {
            console.log("Error while connecting Redis to server", error);
        });
        await redisClient.connect();
        logger.info("✅ Connected to Redis server successfully!")
    } catch (error) {
        console.error("Failed to connect to Redis:", error);
    }
};