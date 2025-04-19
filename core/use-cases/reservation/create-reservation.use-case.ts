import { ReservationRepository } from "@/core/repositories/reservation.repository";
import { CreateReservationDTO } from "@/core/dtos/reservation/create-reservation.dto";
import { Reservation } from "@/core/models/Reservation";

export class CreateReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

   execute(data: CreateReservationDTO): Reservation {
     return this.reservationRepository.createReservation(data);
  }
}
