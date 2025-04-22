import { RESERVATIONS } from "@/constants/reservations";
import { Reservation } from "@/domain/models/Reservation";
import { GetReservationsByEventUseCase } from "@/domain/use-cases/reservation/get-reservattion-byEvent.use-case";

describe("GetReservationsByEventUseCase", () => {
  const reservationsMock: Reservation[] = RESERVATIONS;

  const repositoryMock = {
    getReservationsByEvent: jest.fn().mockReturnValue(reservationsMock),
  }   as any;

  it("should return reservations for a given event", () => {
    const useCase = new GetReservationsByEventUseCase(repositoryMock);
    const result = useCase.execute(10);
    expect(result).toEqual(reservationsMock);
    expect(repositoryMock.getReservationsByEvent).toHaveBeenCalledWith(10);
  });
});
