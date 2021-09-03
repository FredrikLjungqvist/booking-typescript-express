import express from "express";
import {router} from "./routes/table";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();


 app.use(helmet())
 app.use(cors())
 app.use(express.json())
 app.use(router)

 app.listen(PORT, ()=> {
     console.log(`Lyssnar på port: ${PORT}`)
 })