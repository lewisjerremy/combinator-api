import Joi from 'joi';
import { idSchema } from './common.schema';

export const setSchema = Joi.object({
  id: idSchema,
  name: Joi.string().alphanum().min(3).max(30),
});
