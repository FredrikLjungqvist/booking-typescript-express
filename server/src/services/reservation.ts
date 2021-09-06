import {Reservation} from "../interface/reservation"
import {Table} from "../interface/table"
import fs from "fs"
import { v4 as uuidv4 } from 'uuid';

console.log("i res")
//Get all reservations

export const getAllBookings = (): Reservation[]  => {
    let getAllBookings = fs.readFileSync(__dirname + "/booking.json", "utf8");
    let allBookings:Reservation[] = JSON.parse(getAllBookings)
    
    
    return allBookings
    
}

//Save reservations

export const saveBookings = (bookings:Reservation[]): void => {
    
    let bookingsToSave:string = JSON.stringify(bookings)

    fs.writeFileSync(__dirname + "/booking.json", bookingsToSave)
}

export const makeReservation = (booking:Reservation):Reservation =>{
    let id = uuidv4()
    booking.id=id
    console.log("i reservation")
    let allBookings = getAllBookings()
    allBookings.push(booking)
    saveBookings(allBookings)
    return booking

}
let date = new Date
let table = {
    id: "1",
    name: "table5",
    seats: 5,
    avalible: true
}
 