import { User, UserResponse } from './user';

export interface AuthResponse {
  user: UserResponse;
  token: Token;
}

export type PostLoginAnonymousRequest = Pick<User, 'id', 'password'>;

export type PostLoginEmailRequest = Pick<User, 'email', 'password'>;

export type PostSignupAnonymousRequest = Pick<User, 'password'>;

export type PostSignupEmailRequest = Pick<User, 'email', 'password'>;

type Token = string;
