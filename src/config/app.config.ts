export default {
  env: process.env.NODE_ENV || 'dev',
  // host: process.env.APP_HOST || 'http://localhost:3000',
  // frontendHost: process.env.APP_FRONTEND_HOST || 'http://localhost:4200',
  port: process.env.APP_PORT || 3000,
  name: process.env.APP_NAME || 'THREE_TEST',
  cors: process.env.APP_CORS || ['http://localhost:4200', 'https://localhost:3000'],
};
