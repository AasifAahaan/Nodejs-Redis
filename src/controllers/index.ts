import { Request, Response } from "express";

export const handleCheckRateLimitor = (req: Request, res: Response) => {
    try {
        res.status(200).json({ success: true, message: "Working fine..." })
    } catch (error: any) {
        res.status(500).json({ success: false, error: error?.message })
    }
}