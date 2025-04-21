import { Reservation } from "@/domain/models/Reservation";
import { ReservationRepository } from "@/domain/repositories/reservation.repository";

export class GetReservationsByEventUseCase {
     
  constructor(private readonly reservationRepository: ReservationRepository) {}

  execute(idEvent: number): Reservation[] {
    return this.reservationRepository.getReservationsByEvent(idEvent);
  }
}
