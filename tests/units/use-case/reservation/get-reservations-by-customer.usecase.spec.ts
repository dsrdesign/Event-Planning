import { RESERVATIONS } from "@/constants/reservations";
import { Reservation } from "@/domain/models/Reservation";
import { GetReservationsByCustomerUseCase } from "@/domain/use-cases/reservation/get-reservation-byCustomer.use-case";

describe("GetReservationsByCustomerUseCase", () => {
  const reservationsMock: Reservation[] = RESERVATIONS;

  const repositoryMock = {
    getReservationsByCustomer: jest.fn().mockReturnValue(reservationsMock),
  } as any;

  it("should return reservations for a given customer", () => {
    const useCase = new GetReservationsByCustomerUseCase(repositoryMock);
    const result = useCase.execute(5);
    expect(result).toEqual(reservationsMock);
    expect(repositoryMock.getReservationsByCustomer).toHaveBeenCalledWith(5);
  });
});
