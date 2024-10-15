import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv"
import { connectedToDatabase } from "./config/database";
import logger from "./utils/logger";
dotenv.config();
import checkRoutes from "../src/routes"
import { limiter } from "./utils/rateLimit";
import { connectRedis } from "./config/redis.config";

const app: Application = express();

// ============================================ Middleware ============================================
app.use(cors())
app.use(express.json({ limit: "100mb" }))
app.use(express.urlencoded({ limit: "100mb", extended: true }))
app.use(express.static("public"))

app.use(cors({
    origin: process.env.ALLOWED_DOMAINS?.split(""),
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(limiter)

// redis client... 
connectRedis()

//ROUTES...
app.use("/api/auth", checkRoutes)

const PORT = process.env.PORT || 9000;

connectedToDatabase().then(() => {
    app.listen(PORT, () => {
        logger.info(`🚀 Server is running on http://localhost:${PORT}`)
    })
}).catch((error) => {
    logger.error("❌ Failed to connect to the database", error);
    process.exit(1);
})