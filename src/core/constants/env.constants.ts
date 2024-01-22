export const envConstants = {
  isProduction: process.env.NODE_ENV === "production",
  PORT: process.env.PORT,
  isApiMock: process.env.API_MOCK === "true",
  MONGODB_URI: process.env.MONGODB_URI,
  AUTH_SECRET: process.env.AUTH_SECRET,
};
