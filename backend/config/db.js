import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://aanyav364_db_user:curefast2005@cluster0.muqpa8d.mongodb.net/CureFast")
    .then(() => {
        console.log("DB CONNECTED");
    })
}
