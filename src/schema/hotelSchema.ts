import mongoose, { Document,Schema } from "mongoose";

export interface IHotel extends Document{
    name:string;
    location:string;
    price:number;
    rating:number;
    description:string;
    image:string;
    totalRooms:number;
    availableRooms:number;

}

const hotelSchema=new Schema<IHotel>({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    totalRooms:{
        type:Number,
        required:true
    },
    availableRooms:{
        type:Number,
        required:true
    }
},{timestamps:true});

const HotelModel=mongoose.model<IHotel>("Hotel",hotelSchema);
export default HotelModel;
