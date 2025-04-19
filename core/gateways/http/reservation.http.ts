import { CreateReservationDTO } from "@/core/dtos/reservation/create-reservation.dto"
import { UpdateReservationDTO } from "@/core/dtos/reservation/update-reservation.dto"
import { Reservation } from "@/core/models/Reservation"
import { ReservationRepository } from "@/core/repositories/reservation.repository"


export class HttpReservation implements ReservationRepository {

     getReservationsByEvent(idEvent: number): Reservation[]{
          return [] as Reservation[]
     };

     getOneReservation(idReservation: number): Reservation {
          return {} as Reservation
     }

     getReservationsByCustomer(idCustomer: number): Reservation[]{
          return {} as Reservation[]
     };

     createReservation(newReservation: CreateReservationDTO): Reservation {
          return {} as Reservation
     };
     
     cancelReservation(idReservation: number): boolean {
          return true
     };

}