import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export default class BaseValidator {
    schema: Joi.ObjectSchema;

    constructor(schema: Joi.ObjectSchema) {
        this.schema = schema;
    }

    validate = (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
}

