import express, { Request, Response, Application } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import routes from "./routes/routes";
import { initializeSubscriber } from "./utils/subscriber.utils";

class App {
    public app: Application;
    private readonly channels: string[];

    constructor() {
        this.app = express();
        this.configureEnvironment();
        this.initializeMiddlewares();
        this.initializeRoutes();
        // subscriber channels
        this.channels = [
            process.env.SUBSCRIBER_CHANNEL_A!,
            process.env.SUBSCRIBER_CHANNEL_B!
        ];
        this.initialiePubSub();
    }

    private configureEnvironment(): void {
        dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private initializeRoutes(): void {
        this.app.use("/channels", routes);
    }

    private async initialiePubSub(): Promise<void> {
        await initializeSubscriber(this.channels);
    }
}

export default new App().app;