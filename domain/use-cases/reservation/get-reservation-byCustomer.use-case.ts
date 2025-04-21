import { Reservation } from "@/domain/models/Reservation";
import { ReservationRepository } from "@/domain/repositories/reservation.repository";

export class GetReservationsByCustomerUseCase {
     
  constructor(private readonly reservationRepository: ReservationRepository) {}

  execute(idCustomer: number): Reservation[] {
    return this.reservationRepository.getReservationsByCustomer(idCustomer);
  }
}
