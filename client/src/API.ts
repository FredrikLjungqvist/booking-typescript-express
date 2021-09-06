import axios, { AxiosResponse } from "axios";



let url:string="http://localhost:4000"


//Get tables
export const getTable = async():Promise<AxiosResponse<ApiDataTable>| undefined> => {
    try {
        const tables:AxiosResponse<ApiDataTable> = await axios.get(url + "/tables")
        return tables
    } catch (error:any) {
        throw new Error(error)
    }
}

//Post table
export const postTable = async(formData:Table):Promise<AxiosResponse<ApiDataTable>> =>{
    try {
        const table: Omit<Table, "id"> = {
            name: formData.name,
            seats: formData.seats,
            available: true
        }
        console.log(table)
        const saveTable: AxiosResponse<ApiDataTable> = await axios.post(
            url + "/tables",
            table
        )
        return saveTable

    } catch (error:any) {
        throw new Error(error)
    }
}

//Delete table
export const deleteTable = async(_id:string): Promise<AxiosResponse<ApiDataTable>> => {
    try {
        const deletedTable:AxiosResponse<ApiDataTable> = await axios.delete(
            `${url}/tables/${_id}`
        )
        return deletedTable
    } catch (error:any) {
        throw new Error(error)
    }
}

//Update Table
export const updateTable = async(_id:string): Promise<AxiosResponse<ApiDataTable>> => {
    try {
        const updateTable:AxiosResponse<ApiDataTable> = await axios.put(
            `${url}/tables/${_id}`
        )
        console.log(updateTable)
        return updateTable
    } catch (error:any) {
        throw new Error(error)
    }
}

//Update Booking
export const bookTable = async(id:string): Promise<AxiosResponse<ApiDataBooking>> =>{
    try {
        const bookedTable:AxiosResponse<ApiDataBooking> = await axios.put(
            `${url}/reservation`
        )
        return bookedTable
    } catch (error:any) {
        throw new Error(error)
    }
}

export const getCatData = async():Promise<AxiosResponse<ApiCatFact>| undefined> => {
    try {
        const fact:AxiosResponse<ApiCatFact> = await axios.get("https://catfact.ninja/fact")
        console.log(fact)
        return fact
    } catch (error:any) {
        throw new Error(error)
    }
}


