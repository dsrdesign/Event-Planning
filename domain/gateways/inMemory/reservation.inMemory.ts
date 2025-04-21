import { EVENTS } from "@/constants/events";
import { RESERVATIONS } from "@/constants/reservations";
import { useAuth } from "@/contexts/auth-provider";
import { CreateReservationDTO } from "@/domain/dtos/reservation/create-reservation.dto";
import { UpdateReservationDTO } from "@/domain/dtos/reservation/update-reservation.dto";
import { Reservation } from "@/domain/models/Reservation";
import { ReservationRepository } from "@/domain/repositories/reservation.repository";
import { useEventStore } from "@/store/event.store";
import { useReservationStore } from "@/store/reservation.store";

export class InMemoryReservation implements ReservationRepository {

  getReservationsByEvent(idEvent: number): Reservation[] {
    return useReservationStore.getState().getReservationsByEventId(idEvent);
  }

  getOneReservation(idReservation: number): Reservation {
    return useReservationStore.getState().getReservationById(idReservation) as Reservation;
  }

  getReservationsByCustomer(idCustomer: number): Reservation[] {
    return useReservationStore.getState().getReservationsByUserId(idCustomer);
  }

  createReservation(newReservation: CreateReservationDTO): Reservation {
    const id = Math.random(); 
    const existingEvent = useEventStore.getState().getEventById(newReservation.idEvent);

    const reservation: Reservation = {
      id: id,
      user: newReservation.idUser,
      event: existingEvent ,
      numberPlace: newReservation.numberPlace,
    };
    useReservationStore.getState().addReservation(reservation);
    return reservation;
  }

  cancelReservation(idReservation: number): boolean {
    const existingReservation = useReservationStore.getState().getReservationById(idReservation);
    
    if (!existingReservation) {
      return false; 
    }

    useReservationStore.getState().cancelReservation(idReservation);
    return true;
  }
}