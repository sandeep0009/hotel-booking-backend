import mongoose, { Document, ObjectId, Schema } from "mongoose";


export interface IBooking extends Document {
    user: ObjectId;
    hotel: ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
    totalAmount: number;
    transactionId: string;
    status: string;
}

const bookingSchema = new Schema<IBooking>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        hotel: {
            type: Schema.Types.ObjectId,
            ref: "Hotel",
            required: true,
        },
        checkInDate: {
            type: Date,
            required: true,
        },
        checkOutDate: {
            type: Date,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        transactionId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["booked", "cancelled"],
            default: "booked",
        },
    },
    { timestamps: true }
);


const BookingModel = mongoose.model<IBooking>("Booking", bookingSchema);
export default BookingModel;