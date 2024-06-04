import { Router } from "express";
import SprocketController from "../controllers/sprocket.controller";
import { SprocketPostValidator, SprocketPutValidator } from "../validators/sprocket.validator";

export default class SprocketRoutes {
    router = Router();

    constructor(private controller: SprocketController, private sprocketPostValidator: SprocketPostValidator, private sprocketPutValidator: SprocketPutValidator) {   
        this.initializeRoutes();
    }
  
    private initializeRoutes(): void {
        this.router.post("/", this.sprocketPostValidator.validate, this.controller.create);
        this.router.get("/", this.controller.getAll);
        this.router.get("/:id", this.controller.getById);
        this.router.put("/:id", this.sprocketPutValidator.validate, this.controller.update);
        this.router.delete("/:id", this.controller.delete);
    }
  }
