import express from "express";
const router = express.Router();

const API_VERSION = "1.0.0";


router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API!",
    version: API_VERSION,
  });
});

router.get("/health", (req, res) => {
  const uptime = process.uptime();
  const currentTime = new Date();

  res.status(200).json({
    status: "OK",
    uptime: Math.floor(uptime),
    timestamp: currentTime.toISOString(),
    version: API_VERSION,
  });
});

export default router;
