import { Request, Response } from "express";
import app from "./app"; // Import the configured app
import http from "http";

class Server {
  private app = app;
  private port = process.env.PORT || 3000;
  private server = http.createServer(this.app);

  constructor() {
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("💪 Server health ok! 💪");
    });
  }

  public start(): void {
    this.server.listen(this.port, () => {
      console.log(`🚀 Server running on http://localhost:${this.port}`);
    });
  }
}

const serverInstance = new Server();
serverInstance.start();