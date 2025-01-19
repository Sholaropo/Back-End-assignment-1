import { Router } from "express";

const router = Router();

/**
 * 
 * @swagger
 * /src/api/v1/routes/:
 *   get:
 *     summary: Get server health status
 *     description: Returns the current health status of the server.
 *     responses:
 *       200:
 *         description: Server is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                 uptime:
 *                   type: number
 *                 timestamp:
 *                   type: string
 *                 version:
 *                   type: number
 */

router.get("/health", (req, res) => {
  const healthCheck = {
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };

  res.status(200).json(healthCheck);
});

export default router;
