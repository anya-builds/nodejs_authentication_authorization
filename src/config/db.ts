import mongoose from "mongoose";

export async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URL!)
        console.log('Mongo connection is successfully established!');
    }catch(err){
        console.log('Mongodb connection error!');
        process.exit(1);
    }
}