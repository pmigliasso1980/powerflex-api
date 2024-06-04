import Joi from 'joi';

export const chartDataSchema = Joi.object({
    sprocket_production_actual: Joi.array().items(Joi.number().integer().required()),
    sprocket_production_goal: Joi.array().items(Joi.number().integer().required()),
    time: Joi.array().items(Joi.number().integer().required()),
}).required();


export const sprocketSchema = Joi.object({
    teeth: Joi.number().integer().min(1).required(),
    pitch_diameter: Joi.number().min(0).required(),
    outside_diameter: Joi.number().min(0).greater(Joi.ref('pitch_diameter')).required(),
    pitch: Joi.number().min(0).required()
}).required();
