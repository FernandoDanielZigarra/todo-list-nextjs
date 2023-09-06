import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://fernandozigarra:J399sVp0lutmm2DO@cluster0.ekgvh4y.mongodb.net/")
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB