import { ReservationRepository } from "@/domain/repositories/reservation.repository";
import { Reservation } from "@/domain/models/Reservation";


export class GetOneReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

   execute(id: number): Reservation {
     return this.reservationRepository.getOneReservation(id);
  }
}
