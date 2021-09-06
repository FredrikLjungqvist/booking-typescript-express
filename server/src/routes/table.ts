import express, { Request, Response } from "express";
import * as services from "../services/table"
import { Table } from "../interface/table";

export const router = express.Router();

//Get
router.get("/tables", (req:Request, res:Response)=>{
    try {
        const tables = services.getAlltables()
        res.status(200).send(tables)
    } catch (error) {
        res.status(200).send(error.message)
    }
})

//Post
router.post("/tables", (req:Request, res:Response)=>{
    try {
        const table = req.body
        console.log(table+"i post")
        const newTable = services.addTable(table)
        
        res.status(201).json(newTable)
        console.log(newTable)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Update
router.put("/tables/:id", (req:Request, res:Response)=>{
    const id:string = req.params.id
    console.log(id)
    try {
        const table = {id:id, seats:req.body.seats}
        const tableToUpdate = services.updateTable(table)
        

        res.status(201).json(tableToUpdate)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//Delete
router.delete("/tables/:id", (req:Request, res:Response)=>{
    const id = {id: req.params.id}
    console.log(id)
    try {
        const tableToDelete = services.deleteTable(id)
        
        res.status(202).json(tableToDelete)
    } catch (error) {
        res.status(500).send(error.message)
    }
})