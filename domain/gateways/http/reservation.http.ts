import { CreateReservationDTO } from "@/domain/dtos/reservation/create-reservation.dto"
import { UpdateReservationDTO } from "@/domain/dtos/reservation/update-reservation.dto"
import { Reservation } from "@/domain/models/Reservation"
import { ReservationRepository } from "@/domain/repositories/reservation.repository"


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