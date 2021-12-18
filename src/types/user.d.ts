import { User as PrismaUser } from '@prisma/client';

export type User = PrismaUser;
export type UserResponse = Omit<User, 'password'>;
