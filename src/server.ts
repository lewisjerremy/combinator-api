import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import ENV from './config/environment.config';
import { redis } from './config/redis.config';

export function server() {
  const app = express();
  const PORT = ENV.PORT;

  app.use(helmet());
  app.use(morgan('tiny'));
  app.use(cors());
  app.use(express.json());

  redis();

  return app.listen(PORT, () =>
    console.log(`🚀 Listening at localhost:${PORT}`),
  );
}
