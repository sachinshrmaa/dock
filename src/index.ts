import express from "express";
import type { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic Route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Express!");
});

// Example JSON Route
app.get("/deploy", (req: Request, res: Response) => {
  res.json({ message: "new chnages deployed" });
});

app.get("/tek", (req: Request, res: Response) => {
  res.json({ message: "bahadur" });
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "pong from legacy" });
});

app.get("/papu", (req: Request, res: Response) => {
  res.json({ message: "pong from legacy" });
});

app.get("/sachin", (req: Request, res: Response) => {
  res.json({ message: "sharma from docker" });
});

app.get("/api/status", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
