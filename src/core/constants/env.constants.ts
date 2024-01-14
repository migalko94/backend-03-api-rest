export const envConstants = {
  isProduction: process.env.NODE_ENV === "production",
  PORT: process.env.PORT,
  isApiMock: process.env.API_MOCK === "true",
};
