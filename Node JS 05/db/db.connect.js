import mongoose from 'mongoose';
import { Constants } from '../utils/constant.js';

export default async function connectDB(){
    try {
        await mongoose.connect(Constants.MONGODB_URI)
        console.log('Connected to MongoDB database successfully!');
    } catch (error) {
        console.log('Error connecting to database:', error.message);
    }
}