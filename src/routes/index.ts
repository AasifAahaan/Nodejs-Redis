import { Router } from "express";
import { handleCheckRateLimitor, handleWithoutRedis, handleWithRedis } from "../controllers";

const router = Router();

router.get("/check", handleCheckRateLimitor)
router.get("/check-without-redis", handleWithoutRedis)

router.get("/check-with-redis", handleWithRedis)


export default router