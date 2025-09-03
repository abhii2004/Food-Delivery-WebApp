import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abhijitpatil2004:abhijitpatil2004@cluster0.cdvpy.mongodb.net/food-del').then(() => console.log("DB Connected"));
}