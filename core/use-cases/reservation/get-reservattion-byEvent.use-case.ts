import { Reservation } from "@/core/models/Reservation";
import { ReservationRepository } from "@/core/repositories/reservation.repository";

export class GetReservationsByEventUseCase {
     
  constructor(private readonly reservationRepository: ReservationRepository) {}

  execute(idEvent: number): Reservation[] {
    return this.reservationRepository.getReservationsByEvent(idEvent);
  }
}
