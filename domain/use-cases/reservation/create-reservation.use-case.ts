import { ReservationRepository } from "@/domain/repositories/reservation.repository";
import { CreateReservationDTO } from "@/domain/dtos/reservation/create-reservation.dto";
import { Reservation } from "@/domain/models/Reservation";

export class CreateReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

   execute(data: CreateReservationDTO): Reservation {
     return this.reservationRepository.createReservation(data);
  }
}
