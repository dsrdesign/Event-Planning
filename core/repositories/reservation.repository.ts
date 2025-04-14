import { Reservation } from "../models/Reservation";

export interface ReservationRepository {
     getReservationsByEvent(idEvent: string): Reservation[];
     getReservationsByCustomer(idCustomer: string): Reservation[]
     createReservation(newReservation: string): Reservation;
     updateReservation(updateReservation: string): Reservation;
     cancelReservation(idReservation: string): boolean;
}