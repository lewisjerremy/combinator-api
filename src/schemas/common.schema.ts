import Joi from 'joi';

export const idSchema = Joi.number().integer().min(1);
export const dateSchema = Joi.date().timestamp('unix');
