import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  SECRET_HASH_TOKEN: process.env.SECRET_HASH_TOKEN,
};
