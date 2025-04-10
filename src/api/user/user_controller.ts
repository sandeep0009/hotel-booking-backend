import { Request,Response } from "express"
import  service  from "./user_service";
import { STATUS_MSG } from "../../constants/constant";

export const signIn=async(req:Request,res:Response):Promise<any>=>{

    try {
        const data=await await service.signInService(req.body);
        return res.status(201).json({message:STATUS_MSG,data});

        
    } catch (error) {
        return res.status(500).json({message:"issue in sigin in api"});
        
    }

}

export const signUp=async(req:Request,res:Response):Promise<any>=>{
    try {
        const data=await service.signUpService(req.body);
        return res.status(200).json({message:STATUS_MSG,data});
        
    } catch (error) {
        return res.status(500).json({message:"issue in sign up api"});
        
    }

}