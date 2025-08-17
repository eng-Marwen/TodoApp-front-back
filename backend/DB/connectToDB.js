
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const connectToDB = async () => {
  try {
    const b=process.env.CONNETCTION_STRING
    await mongoose.connect(process.env.CONNETCTION_STRING);
    console.log("db starting");
  } catch (err) {
    console.log("problem in db");
    process.exit(1);
  }
};
