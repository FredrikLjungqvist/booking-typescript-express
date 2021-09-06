interface Table{
    id:string,
    name:string,
    seats:number,
    available:boolean
    bookAt?:Date
}

type TableProps= {
    table:Table
}

interface Booking{
    id?:string,
    date:Date
    table:Table
}

type ApiDataTable = {
    message: string
    status: string
    tables: Table[]
    table?: Table
}

interface ApiDataBooking {
    massage: string
    status: string
    booking: Booking
    tables: Table[]
}

interface CatData {
    fact:string
    length:number
}
interface ApiCatFact {
    message:string
    status:string
    content: catData
}