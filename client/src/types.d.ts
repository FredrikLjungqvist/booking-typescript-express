interface Table{
    id:string,
    name:string,
    seats:number,
    available:boolean
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
}