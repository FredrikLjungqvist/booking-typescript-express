import { Table } from "../interface/table";
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';
console.log("i services")
//Get all tables
export const getAlltables = (): Table[] => {
    let getAllTables = fs.readFileSync(__dirname + "/tables.json", "utf8");
    let allTables:Table[] = JSON.parse(getAllTables)
    console.log("i gett all tbles")
    
    return allTables

}
getAlltables()
//Save table
export const saveTable = (table:Table[]): void => {
    
    let tablesToSave:string = JSON.stringify(table)

    fs.writeFileSync(__dirname + "/tables.json", tablesToSave)

    
}

//Add table
export const addTable =  (table:Table): Table  =>{
    let allTables = getAlltables()
    let id = uuidv4()
    table.id=id
    allTables.push(table)
    saveTable(allTables)
    return table
}
//Update Table
export const updateTable = (table:Pick<Table, "id" | "available">): Pick<Table, "id" | "available"> =>{
    
    let allTables = getAlltables()
    let index = allTables.findIndex((name)=>name.id===table.id)
    const result = index > -1 ? allTables[index].available = table.available : console.error("Det gick inte att uppdatera")
    
    saveTable(allTables)
    return {id: table.id, available:table.available}
    
}

//Delete
export const deleteTable = (table:Pick<Table, "id">): void =>{

    let allTables = getAlltables()
    let index = allTables.findIndex((name)=>name.id===table.id)
    console.log(table.id + " id delete")
    index > -1 ? allTables.splice(index, 1) : console.error("Det gick inte att ta bort bordet")
    console.log(index + " index")
    saveTable(allTables)
    
}



