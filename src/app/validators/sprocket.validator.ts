import BaseValidator from './base.validator';
import Joi from 'joi';
import { sprocketSchema } from './shared.schema';

export class SprocketPostValidator extends BaseValidator {
    constructor() {
        const schema = sprocketSchema;
        super(schema);
    }
}

export class SprocketPutValidator extends BaseValidator {
    constructor() {
        // Extend the existing sprocketSchema to include the 'id' field
        const extendedSchema = sprocketSchema.append({
            id: Joi.number().integer().required() // Adding the 'id' field required for PUT operations
        });
        super(extendedSchema);
    }
}
