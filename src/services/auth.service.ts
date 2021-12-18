import { prisma } from '../config/db.config';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  AuthResponse,
  PostLoginAnonymousRequest,
  PostLoginEmailRequest,
  PostSignupAnonymousRequest,
  PostSignupEmailRequest,
} from '../types/auth';
import { ValidationError } from '../utils/error.util';
import ENV from '../config/environment.config';
import {
  loginAnonymousSchema,
  loginEmailSchema,
  signupAnonymousSchema,
  signupEmailSchema,
} from '../schemas/auth.schema';

export async function loginAnonymous(
  req: PostLoginAnonymousRequest,
): Promise<AuthResponse> {
  const validation = loginAnonymousSchema.validate(req);
  if (validation.error) throw new ValidationError(`${validation.error}`);

  const dbUser = await prisma.user.findFirst({ where: { id: req.id } });
  if (!dbUser) throw new ValidationError(`id: ${req.id} not found`);

  const validPassword = await bcrypt.compare(req.password, dbUser.password);
  if (!validPassword) throw new ValidationError(`password not valid`);

  const token = jwt.sign({ userId: dbUser.id }, ENV.JWT);
  const { id, email, createdAt, updatedAt } = dbUser;

  return {
    token,
    user: {
      id,
      email,
      createdAt,
      updatedAt,
    },
  };
}

export async function loginEmail(
  req: PostLoginEmailRequest,
): Promise<AuthResponse> {
  const validation = loginEmailSchema.validate(req);
  if (validation.error) throw new ValidationError(`${validation.error}`);

  const dbUser = await prisma.user.findFirst({ where: { email: req.email } });
  if (!dbUser) throw new ValidationError(`email: ${req.email} not found`);

  const validPassword = await bcrypt.compare(req.password, dbUser.password);
  if (!validPassword) throw new ValidationError(`password not valid`);

  const token = jwt.sign({ userId: dbUser.id }, ENV.JWT);
  const { id, email, createdAt, updatedAt } = dbUser;

  return {
    token,
    user: {
      id,
      email,
      createdAt,
      updatedAt,
    },
  };
}

export async function signupAnonymous(
  req: PostSignupAnonymousRequest,
): Promise<AuthResponse> {
  const validation = signupAnonymousSchema.validate(req);
  if (validation.error) throw new ValidationError(`${validation.error}`);

  const hashedPassword = await bcrypt.hash(req.password, 10);

  const dbUser = await prisma.user.create({
    data: { password: hashedPassword },
  });

  const token = jwt.sign({ userId: dbUser.id }, ENV.JWT);
  const { id, email, createdAt, updatedAt } = dbUser;

  return {
    token,
    user: {
      id,
      email,
      createdAt,
      updatedAt,
    },
  };
}

export async function signupEmail(
  req: PostSignupEmailRequest,
): Promise<AuthResponse> {
  const validation = signupEmailSchema.validate(req);
  if (validation.error) throw new ValidationError(`${validation.error}`);

  const existingUser = await prisma.user.findFirst({
    where: { email: req.email },
  });
  if (existingUser) throw new ValidationError(`email: ${req.email} in use`);

  const hashedPassword = await bcrypt.hash(req.password, 10);

  const dbUser = await prisma.user.create({
    data: { email: req.email, password: hashedPassword },
  });

  const token = jwt.sign({ userId: dbUser.id }, ENV.JWT);
  const { id, email, createdAt, updatedAt } = dbUser;

  return {
    token,
    user: {
      id,
      email,
      createdAt,
      updatedAt,
    },
  };
}
