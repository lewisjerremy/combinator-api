import express from 'express';
import ENVIRONMENT from './config/environment';

export function server() {
  const app = express();
  const port = ENVIRONMENT.PORT;

  return app.listen(port, () =>
    console.log(`🚀 Listening at localhost:${port}`),
  );
}
