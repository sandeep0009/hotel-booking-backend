
import mongoose from "mongoose";
import { DATABASE_URL } from "../config/config";

const connectionDb=async()=>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("database connected");
        
    } catch (error) {
        console.log("error in database",error);
        process.exit(1);
         
    }
}

export default connectionDb;