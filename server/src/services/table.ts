import { Table } from "../interface/table";
import fs from "fs"
console.log("i services")
//Get all tables
export const getAlltables = (): Table[] => {
    let getAllTables = fs.readFileSync(__dirname + "/tables.json", "utf8");
    let allTables:Table[] = JSON.parse(getAllTables)
    
    
    return allTables

}

//Save table
export const saveTable = (table:Table[]): void => {
    
    let tablesToSave:string = JSON.stringify(table)

    fs.writeFileSync(__dirname + "/tables.json", tablesToSave)

    
}

//Add table
export const addTable =  (table:Table): Table  =>{
    let allTables = getAlltables()
    
    allTables.push(table)
    saveTable(allTables)
    return table
}
//Update Table
export const updateTable = (table:Pick<Table, "name" | "seats">): Pick<Table, "name" | "seats"> =>{
    
    let allTables = getAlltables()
    let index = allTables.findIndex((name)=>name.name===table.name)
    const result = index > -1 ? allTables[index].seats = table.seats : console.error("Det gick inte att uppdatera")
  
    saveTable(allTables)
    return {name: table.name, seats:table.seats}
    
}


export const deleteTable = (table:Pick<Table, "name">): void =>{

    let allTables = getAlltables()
    let index = allTables.findIndex((name)=>name.name===table.name)
    index > -1 ? allTables.splice(index, 1) : console.error("Det gick inte att ta bort bordet")

}

