import express, { NextFunction, Request, Response } from 'express';
import {
  loginAnonymous,
  loginEmail,
  signupAnonymous,
  signupEmail,
} from '../services/auth.service';

const router = express.Router();

router.post(
  '/login',
  async function (req: Request, res: Response, next: NextFunction) {
    let response;

    try {
      if (req.query.method == 'email') {
        response = await loginEmail(req.body);
        res.status(200).json(response);
      }

      response = await loginAnonymous(req.body);
    } catch (e) {
      next(e);
    }

    res.status(200).json(response);
  },
);

router.post(
  '/signup',
  async function (req: Request, res: Response, next: NextFunction) {
    let response;

    try {
      if (req.query.method == 'email') {
        response = await signupEmail(req.body);
      }

      response = await signupAnonymous(req.body);
    } catch (e) {
      next(e);
    }

    res.status(200).json(response);
  },
);

export const authRouter = router;
