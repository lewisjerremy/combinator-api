import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = {
  NODE: {
    DEVELOPMENT: process.env.NODE_ENV === 'development',
    STAGING: process.env.NODE_ENV === 'staging',
    PRODUCTION: process.env.NODE_ENV === 'production',
  },
  PORT: process.env.PORT || 1000,
  JWT: process.env.jwt || 'secret',
};

export default ENVIRONMENT;
