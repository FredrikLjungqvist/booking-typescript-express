import express, { Request, Response } from "express";
import * as services from "../services/reservation"
import { Table } from "../interface/table";
import { router } from "./table";

export const routerReservation = express.Router();

//Post reservation
routerReservation.post("/reservation", (req:Request, res:Response)=>{
    try {
        const booking = req.body
        console.log(booking + " book i post")
        const newBooking = services.makeReservation(booking)
        
        res.status(201).json(newBooking)
        console.log(newBooking)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
})