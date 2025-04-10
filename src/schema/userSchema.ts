import mongoose, { Document,Schema } from "mongoose";

export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    role:string;
}

const userSchema=new Schema<IUser>({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
},{timestamps:true});

const UserModel=mongoose.model<IUser>("User",userSchema);
export default UserModel;