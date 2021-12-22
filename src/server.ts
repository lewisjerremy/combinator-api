import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import ENV from './config/environment.config';
import { authRouter } from './routes/auth.route';
import { errorMiddleware } from './middlewares/error.middleware';

export function server() {
  const app = express();
  const PORT = ENV.PORT;

  app.use(helmet());
  app.use(morgan('tiny'));
  app.use(cors());
  app.use(express.json());

  app.use('/auth', authRouter);

  app.use(errorMiddleware);

  return app.listen(PORT, () =>
    console.log(`🚀 Listening at localhost:${PORT}`),
  );
}
