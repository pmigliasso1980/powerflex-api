import { Router } from "express";
import FactoryController from "../controllers/factory.controller";
import { FactoryPostValidator, FactoryPutValidator } from "../validators/factory.validator";

export default class FactoryRoutes {
    router = Router();

    constructor(private controller: FactoryController, private factoryPostValidator: FactoryPostValidator, private factoryPutlValidator: FactoryPutValidator) {   
        this.initializeRoutes();
    }
  
    private initializeRoutes(): void {
        this.router.post("/", this.factoryPostValidator.validate, this.controller.create);
        this.router.get("/", this.controller.getAll);
        this.router.get("/:id", this.controller.getById);
        this.router.put("/:id", this.factoryPutlValidator.validate, this.controller.update);
        this.router.delete("/:id", this.controller.delete);
    }
  }
