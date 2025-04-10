import { ROLE_TYPE, STATUS_MSG } from "../../constants/constant";
import UserModel from "../../schema/userSchema";
import bcrypt from "bcryptjs";


const signUpService=async(data:any):Promise<any>=>{
    const userExist=await UserModel.findOne({email:data.email});
    if(userExist){
        return {status:STATUS_MSG.CREATE,message:"user already exist"};
    }
    const hashedPassword=await bcrypt.hash(data.password,10);
    const userPayload={
        name:data.name,
        email:data.email,
        password:hashedPassword,
        role:data.role ? data.role : ROLE_TYPE.user
    }
    const user=await UserModel.create(userPayload);
    return "Created";
}

 const signInService=async(data:any):Promise<any>=>{
    const user=await UserModel.findOne({email:data.email});
    if(!user){
        return {status:STATUS_MSG.CREATE,message:"user not found"};
    }
    const isMatch=await bcrypt.compare(data.password,user.password);
    if(!isMatch){
        return {status:STATUS_MSG.CREATE,message:"password not matched"};
    }
    return user;


}


export default {
    signUpService,
    signInService
}