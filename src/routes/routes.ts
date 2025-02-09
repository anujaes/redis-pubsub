import { Router } from 'express';
import Controllers from '../controllers/controller';

class Routes {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/publish-message', Controllers.publishMessage);
  }

  public getRouter(): Router {
    return this.router;
  }
}

// Export the router instance
export default new Routes().getRouter();
