import { CreateReservationDTO } from "../dtos/reservation/create-reservation.dto";
import { UpdateReservationDTO } from "../dtos/reservation/update-reservation.dto";
import { Reservation } from "../models/Reservation";

export interface ReservationRepository {
     getOneReservation(idReservation: number): Reservation
     getReservationsByEvent(idEvent: number): Reservation[];
     getReservationsByCustomer(idCustomer: number): Reservation[]
     createReservation(newReservation: CreateReservationDTO): Reservation;
     cancelReservation(idReservation: number): boolean;
}