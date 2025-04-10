

import { Request, Response } from "express";
import service from "./hotel_service";
import { STATUS_MSG } from "../../constants/constant";
export const createHotel=async(req:Request,res:Response):Promise<any>=>{  
    try {
        const data=await service.createHotelService(req.body);
        return res.status(201).json({message:STATUS_MSG.CREATE,data});
        
    } catch (error) {
        return res.status(500).json({message:"issue in create hotel api"});
        
    }
}


export const getAllHotel=async(req:Request,res:Response):Promise<any>=>{
    try {
        const data=await service.getAllHotelService();
        return res.status(200).json({message:STATUS_MSG.CREATE,data});
        
    } catch (error) {
        return res.status(500).json({message:"issue in get all hotel api"});
        
    }
}


export const getSingleHotel=async(req:Request,res:Response):Promise<any>=>{
    try {
        const data=await service.getSingleHotelService(req.params.id);
        return res.status(200).json({message:STATUS_MSG.CREATE,data});
        
    } catch (error) {
        return res.status(500).json({message:"issue in get single hotel api"});
        
    }
}

export const updateHotel=async(req:Request,res:Response):Promise<any>=>{
    try {
        const data=await service.updateHotelService(req.params.id,req.body);
        return res.status(200).json({message:STATUS_MSG.UPDATE,data});
        
    } catch (error) {
        return res.status(500).json({message:"issue in update hotel api"});
        
    }
}


export const deleteHotel=async(req:Request,res:Response):Promise<any>=>{
    try {
        const data=await service.deleteHotelService(req.params.id);
        return res.status(200).json({message:STATUS_MSG.DELETE,data});
        
    } catch (error) {
        return res.status(500).json({message:"issue in delete hotel api"});
        
    }
}

