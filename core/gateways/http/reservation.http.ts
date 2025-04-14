import { Reservation } from "@/core/models/Reservation"
import { ReservationRepository } from "@/core/repositories/reservation.repository"


export class HttpReservation implements ReservationRepository {

     getReservationsByEvent(idEvent: string): Reservation[]{
          return [] as Reservation[]
     };

     getReservationsByCustomer(idCustomer: string): Reservation[]{
          return {} as Reservation[]
     };

     createReservation(newReservation: string): Reservation {
          return {} as Reservation
     };

     updateReservation(updateReservation: string): Reservation {
          return {} as Reservation
     };
     
     cancelReservation(idReservation: string): boolean {
          return true
     };

}