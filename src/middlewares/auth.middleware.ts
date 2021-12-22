import jwt from 'jsonwebtoken';
import { NextFunction, Request as ExpRequest, Response } from 'express';
import ENV from '../config/environment.config';
import { AuthenticationError, ValidationError } from '../utils/error.util';
import { DecodedToken } from '../types/auth';
import { prisma } from '../config/db.config';
import { UserResponse } from '../types/user';

interface Request extends ExpRequest {
  auth: { user: UserResponse };
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let token = req.headers.authorization;

  if (token) {
    token = token.replace('Bearer ', '');

    const decoded = jwt.verify(token, ENV.JWT) as DecodedToken;
    if (!decoded.userId) throw new ValidationError(`token invalid`);
    const userId = parseInt(decoded['userId']);

    const dbUser = await prisma.user.findFirst({ where: { id: userId } });
    if (!dbUser) throw new ValidationError(`token invalid`);

    const { id, email, createdAt, updatedAt } = dbUser;

    req.auth.user = {
      id,
      email,
      createdAt,
      updatedAt,
    };

    next();
  }
  throw new AuthenticationError();
}
