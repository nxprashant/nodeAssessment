import { config } from 'dotenv';
config();
const configuration = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL: process.env.MONGO_URL,
};

export default configuration;