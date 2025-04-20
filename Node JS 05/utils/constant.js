import dotenv from 'dotenv';

dotenv.config();

export const Constants = {
    PORT: process.env.PORT || 3001,
    MONGODB_URI: process.env.MONGODB_URI,
}