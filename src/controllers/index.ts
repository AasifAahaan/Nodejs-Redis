import { NextFunction, Request, Response } from "express";
import { redisClient } from "../config/redis.config";

export const handleCheckRateLimitor = (req: Request, res: Response) => {
    try {
       return res.status(200).json({ success: true, message: "Working fine..." })
    } catch (error: any) {
        res.status(500).json({ success: false, error: error?.message })
    }
}

export const handleWithoutRedis = (req: Request, res: Response) => {
    try {
        let data = 0;
        for (let i = 0; i < 10000000000; i++) {
            data += i
        }
        res.json({ message: data })
    } catch (error: any) {
        res.status(500).json({ success: false, error: error?.message })
    }
}

export const handleWithRedis = async (req: Request, res: Response) => {
    try {
        if (!redisClient) {
            return res.status(500).json({ success: false, message: "Redis client not initialized" });
        }

        const redisData = await redisClient.get('dataKey'); 

        let data = 0;
        for (let i = 0; i < 10000000000; i++) {
            data += i;
        }

        res.json({ redisData, computedData: data });
    } catch (error: any) {
        console.log(error)
    }
};