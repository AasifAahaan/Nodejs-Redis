import { Router } from "express";
import { handleCheckRateLimitor } from "../controllers";

const router = Router();

router.get("/check", handleCheckRateLimitor)

export default router