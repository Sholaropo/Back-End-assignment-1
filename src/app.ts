const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const http = require("http");
import { Request, Response } from "express";

const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API information",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/api/v1/routes/*.ts", "./src/app.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.get("/api/v1/health", (req: Request, res: Response) => {
  const healthCheck = {
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };
  res.status(200).json(healthCheck);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API!");
});

const server = http.createServer(app).listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
  console.log(`Swagger docs available at http://localhost:3000/api-docs`);
});

module.exports = { app, server };
