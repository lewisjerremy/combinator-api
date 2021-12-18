import dotenv from 'dotenv';

dotenv.config();

const ENV = {
  NODE: {
    DEVELOPMENT: process.env.NODE_ENV === 'development',
    STAGING: process.env.NODE_ENV === 'staging',
    PRODUCTION: process.env.NODE_ENV === 'production',
  },
  PORT: parseInt(`${process.env.PORT}`),
  JWT: `${process.env.JWT}`,
  REDIS_URL: `${process.env.REDIS_URL}`,
};

export default ENV;
