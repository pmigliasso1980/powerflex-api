import { Application } from "express";
import FactoryRoutes from "./factory.routes";
import FactoryController from "../controllers/factory.controller";
import { FactoryPostValidator, FactoryPutValidator } from "../validators/factory.validator";
import SprocketRoutes from "./sprocket.routes";
import SprocketController from "../controllers/sprocket.controller";
import { SprocketPostValidator, SprocketPutValidator } from "../validators/sprocket.validator";
import FactoryService from "../services/factory.service";
import SprocketService from "../services/sprocket.service";
import FactoryRepository from "../repositories/factory.repository";
import SprocketRepository from "../repositories/sprocket.repository";

export default class Routes {
  constructor(app: Application) {
    const factoryRepository = new FactoryRepository();
    const factoryService = new FactoryService(factoryRepository);
    const factoryController = new FactoryController(factoryService);
    const factoryPostValidator = new FactoryPostValidator();
    const factoryPutValidator = new FactoryPutValidator();
    const factoryRoutes = new FactoryRoutes(factoryController, factoryPostValidator, factoryPutValidator);
    app.use("/api/factories", factoryRoutes.router);

    const sprocketRepository = new SprocketRepository();
    const sprocketService = new SprocketService(sprocketRepository);
    const sprocketController = new SprocketController(sprocketService);
    const sprocketPostValidator = new SprocketPostValidator();
    const sprocketPutValidator = new SprocketPutValidator();
    const sprocketRoutes = new SprocketRoutes(sprocketController, sprocketPostValidator, sprocketPutValidator);
    app.use("/api/sprockets", sprocketRoutes.router);
  }
}
