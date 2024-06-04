import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { SprocketCreateRequestDTO, SprocketUpdateRequestDTO } from "../dto/request/sprocket.request.dto";
import { SprocketCreateResponseDTO } from "../dto/response/sprocket.response.dto";
import SprocketService from "../services/sprocket.service";

export default class SprocketController {
    constructor(private sprocketService: SprocketService) {}

    create = async (req: Request, res: Response) => {
        const sprocketDto = plainToClass(SprocketCreateRequestDTO, req.body);

        // Perform validation
        const errors = await validate(sprocketDto);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            const sprocket = await this.sprocketService.create(sprocketDto);
            const response = new SprocketCreateResponseDTO(sprocket);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const sprockets = await this.sprocketService.getAll();
            res.status(200).json(sprockets);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    getById = async(req: Request, res: Response) => {
        const sprocketId = parseInt(req.params.id);

        try {
            const sprocket = await this.sprocketService.getById(sprocketId);
            if (sprocket) {
                res.status(200).json(sprocket);
            } else {
                res.status(404).json({ message: `Cannot find Sprocket with id=${sprocketId}.` });
            }
        } catch (error: any) {
            res.status(500).json({ message: `Error retrieving Sprocket with id=${sprocketId}.` });
        }
    }

    update = async (req: Request, res: Response) => {
        const sprocketId = parseInt(req.params.id);
        const sprocketDto = plainToClass(SprocketUpdateRequestDTO, req.body);
        sprocketDto.id = sprocketId;

        // Perform validation
        const errors = await validate(sprocketDto);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            const affectedRows = await this.sprocketService.update(sprocketDto);
            res.status(200).json({ affectedRows });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    delete = async (req: Request, res: Response) => {
        const sprocketId = parseInt(req.params.id);

        try {
            const affectedRows = await this.sprocketService.delete(sprocketId);
            res.status(200).json({ affectedRows });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
