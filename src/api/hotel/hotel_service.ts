import HotelModel from "../../schema/hotelSchema";






const createHotelService=async(data:any):Promise<any>=>{
    const hotelPayload={
        name:data.name,
        location:data.location,
        price:data.price,
        rating:data.rating,
        description:data.description
    }
    const hotel=await HotelModel.create(hotelPayload);
    return hotel;
}


const getAllHotelService=async():Promise<any>=>{
    const hotels=await HotelModel.find();
    return hotels;
}


const getSingleHotelService=async(id:string):Promise<any>=>{
    if(!id){
        return {status:"failed",message:"hotel id not found"};
    }
    const hotel =await HotelModel.findById(id);
    if(!hotel){
        return {status:"failed",message:"hotel not found"};
    }
    return hotel;

}


const updateHotelService=async(id:string,data:any):Promise<any>=>{
    if(!id){
        return {status:"failed",message:"hotel id not found"};
    }
    const hotel=await HotelModel.findByIdAndUpdate(id,data,{new:true});

    return hotel;
    
}

const deleteHotelService=async(id:string):Promise<any>=>{
    const hotel=await HotelModel.findByIdAndDelete(id);
    return hotel;
}

export default {
    createHotelService,
    getAllHotelService,
    getSingleHotelService,
    updateHotelService,
    deleteHotelService
}