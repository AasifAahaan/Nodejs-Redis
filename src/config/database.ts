import mongoose from "mongoose";
import logger from "../utils/logger";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_URI

if (!url) {
    logger.error('❌ MongoDB connection string is not defined in the .env file');
    process.exit(1)
}

export const connectedToDatabase = async () => {
    try {
        await mongoose.connect(url)
        logger.info('✅ Connected to MongoDB');
    } catch (error) {
        logger.error('❌ Failed to connect to MongoDB', error);
        process.exit(1)
    }
}