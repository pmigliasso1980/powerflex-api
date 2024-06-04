import { Request, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { FactoryCreateRequestDTO, FactoryUpdateRequestDTO } from '../dto/request/factory.request.dto';
import { FactoryCreateResponseDTO } from '../dto/response/factory.response.dto';
import FactoryService from '../services/factory.service';

export default class FactoryController {
    constructor(private factoryService: FactoryService) {}

    create = async (req: Request, res: Response) => {
        const factoryDto = plainToInstance(FactoryCreateRequestDTO, req.body);

        // Perform validation
        const errors = await validate(factoryDto);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            const factory = await this.factoryService.create(factoryDto);
            const response = new FactoryCreateResponseDTO(factory);
            res.status(201).json(response);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const factories = await this.factoryService.getAll();
            res.status(200).json(factories);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    getById = async (req: Request, res: Response) => {
        const factoryId = parseInt(req.params.id);

        try {
            const factory = await this.factoryService.getById(factoryId);
            if (factory) {
                res.status(200).json(factory);
            } else {
                res.status(404).json({ message: `Cannot find Factory with id=${factoryId}.` });
            }
        } catch (error: any) {
            res.status(500).json({ message: `Error retrieving Factory with id=${factoryId}.` });
        }
    }

    update = async (req: Request, res: Response) => {
        const factoryId = parseInt(req.params.id);
        const factoryDto = plainToInstance(FactoryUpdateRequestDTO, req.body);
        factoryDto.id = factoryId;

        // Perform validation
        const errors = await validate(factoryDto);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            const affectedRows = await this.factoryService.update(factoryDto);
            res.status(200).json({ affectedRows });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    delete = async (req: Request, res: Response) => {
        const factoryId = parseInt(req.params.id);

        try {
            const affectedRows = await this.factoryService.delete(factoryId);
            res.status(200).json({ affectedRows });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
