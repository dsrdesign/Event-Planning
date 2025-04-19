import { Reservation } from "@/core/models/Reservation";
import { ReservationRepository } from "@/core/repositories/reservation.repository";

export class GetReservationsByCustomerUseCase {
     
  constructor(private readonly reservationRepository: ReservationRepository) {}

  execute(idCustomer: number): Reservation[] {
    return this.reservationRepository.getReservationsByCustomer(idCustomer);
  }
}
