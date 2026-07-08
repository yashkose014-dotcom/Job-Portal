import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/job-portal";
        await mongoose.connect(mongoUri);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log('mongodb connection failed:', error.message);
    }
}
export default connectDB;