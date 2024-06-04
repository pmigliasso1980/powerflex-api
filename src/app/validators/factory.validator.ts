import Joi from 'joi';
import BaseValidator from './base.validator';
import { chartDataSchema } from './shared.schema';

export class FactoryPostValidator extends BaseValidator {
    constructor() {
        const schema = Joi.object({
            chart_data: chartDataSchema
        });
        super(schema);
    }
}

export class FactoryPutValidator extends BaseValidator {
    constructor() {
        const schema = Joi.object({
            id: Joi.number().integer().required(),
            chart_data: chartDataSchema
        });
        super(schema);
    }
}
