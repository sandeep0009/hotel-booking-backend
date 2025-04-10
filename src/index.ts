import express from "express";
import router from "./routes";
import connectionDb from "./database/connection";

const app=express();

const port=3000;
app.use(express.json());


connectionDb();
app.use(router);


app.listen(port,()=>{
    console.log("connected to backend");
})