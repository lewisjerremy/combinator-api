import Joi from 'joi';
import { idSchema } from './common.schema';

export const combinationSchema = Joi.object({
  id: idSchema,
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
