import express, { Request, Response } from 'express';
import { loginEmail } from '../services/auth.service';
import { ValidationError } from '../utils/error.util';

const router = express.Router();

router.post('/login', async function (req: Request, res: Response) {
  const method = req.query.method;

  try {
    if (method == 'email') {
      const response = await loginEmail({});
      res.status(200).json(response);
    }

    res.status(200).json({ message: 'success' });
  } catch (e) {
    throw e;
  }
});

router.post('/signup', function (req: Request, res: Response) {
  res.status(200).json({ message: 'success' });
});
