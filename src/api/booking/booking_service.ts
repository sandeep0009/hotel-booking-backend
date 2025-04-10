import BookingModel from "../../schema/bookingSchema";


const createBookingService = async (bookingData:any):Promise<any> => {

    try{
        const booking = await BookingModel.create(bookingData);
        return booking;
    }
    catch(error){
        throw new Error("Error creating booking");
    }
}

const getAllBookingService = async ():Promise<any> => {
    try{
        const bookings = await BookingModel.find();
        return bookings;
    }
    catch(error){
        throw new Error("Error fetching all bookings");
    }
}

const getSingleBookingService = async (id:string):Promise<any> => {
    try{
        const booking = await BookingModel.findById(id);
        if(!booking){
            throw new Error("Booking not found");
        }
        return booking;
    }
    catch(error){
        throw new Error("Error fetching booking details");
    }
}

const updateBookingService = async (id:string, bookingData:any):Promise<any> => {
    if(!id){
        throw new Error("Booking ID not found");
    }
    const booking=await BookingModel.findByIdAndUpdate(id, bookingData, {new:true});
    return booking
}

const deleteBookingService = async (id:string):Promise<any> => {
    if(!id){
        throw new Error("Booking ID not found");
    }
    const booking = await BookingModel.findByIdAndDelete(id);
    return booking;
}

export default {
    createBookingService,
    getAllBookingService,
    getSingleBookingService,
    updateBookingService,
    deleteBookingService
}