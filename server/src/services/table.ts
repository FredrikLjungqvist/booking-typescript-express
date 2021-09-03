import { Table } from "../interface/table";
import fs from "fs"

//Get all tables
const getAlltables = (): Table[] => {
    let getAllTables = fs.readFileSync("tables.json" + "Table" + ".json", "utf8");
    let allTables:Table[] = JSON.parse(getAllTables)
    
    console.log(allTables)
    return allTables

}

//Save table
const saveTable = (table:Table[]): void => {
    
    let tablesToSave:string = JSON.stringify(table)

    fs.writeFileSync("todo.json", tablesToSave)

    console.log(tablesToSave)
}

//Add table
const addTable =  (table:Table): void  =>{
    let allTables = getAlltables()
    
    allTables.push(table)
    saveTable(allTables)
}

//Update Table
const updateTable = (table:Pick<Table, "name" | "seats">): void =>{
    
    let allTables = getAlltables()
    let index = allTables.findIndex((name)=>name.name===table.name)
    index > -1 ? allTables[index].seats = table.seats : console.error("Det gick inte att uppdatera")
    saveTable(allTables)
    
}

const deleteTable = (table:Pick<Table, "name">): void =>{

    let allTables = getAlltables()
    let index = allTables.findIndex((name)=>name.name===table.name)
    index > -1 ? allTables.splice(index, 1) : console.error("Det gick inte att ta bort bordet")

}

