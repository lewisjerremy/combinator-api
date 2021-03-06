import Joi from 'joi';
import { idSchema } from './common.schema';

const emailSchema = Joi.string().email({
  minDomainSegments: 2,
});

const passwordSchema = Joi.string().min(8);

export const loginAnonymousSchema = Joi.object({
  id: idSchema.required(),
  password: passwordSchema.required(),
});

export const loginEmailSchema = Joi.object({
  email: emailSchema.required(),
  password: passwordSchema.required(),
});

export const signupAnonymousSchema = Joi.object({
  password: passwordSchema.required(),
});

export const signupEmailSchema = Joi.object({
  email: emailSchema.required(),
  password: passwordSchema.required(),
});
