import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";




const connectdb =async () => {
    try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     console.log(`\n MoongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}
export default connectdb;