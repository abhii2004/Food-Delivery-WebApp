import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('your URL from mongoose').then(() => console.log("DB Connected"));
}
