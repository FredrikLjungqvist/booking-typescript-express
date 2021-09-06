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
export const postTable = async(formData:Table):Promise<AxiosResponse<ApiDataTable> | undefined> =>{
    try {
        const table = {
            name: formData.name,
            seats: formData.seats,
            available: true
        }
        const saveTable: AxiosResponse<ApiDataTable> = await axios.post(
            url + "/tables",
            table
        )
        return saveTable

    } catch (error) {
        
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