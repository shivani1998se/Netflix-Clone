
import dotenv from "dotenv";
import path from "path";

// force load from backend/.env
dotenv.config({ path: path.resolve(process.cwd(), "backend/.env") });

export const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_API_KEY: process.env.TMDB_API_KEY,
};
