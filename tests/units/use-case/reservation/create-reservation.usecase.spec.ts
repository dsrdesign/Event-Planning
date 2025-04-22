import { RESERVATIONS } from "@/constants/reservations";
import { CreateReservationDTO } from "@/domain/dtos/reservation/create-reservation.dto";
import { Category } from "@/domain/models/Category";
import { Reservation } from "@/domain/models/Reservation";
import { CreateReservationUseCase } from "@/domain/use-cases/reservation/create-reservation.use-case";

describe("CreateReservationUseCase", () => {
  const reservationMock: Reservation = RESERVATIONS[0];

  const repositoryMock = {
    createReservation: jest.fn().mockReturnValue(reservationMock),
  } as any;

  it("should create a reservation", () => {
    const useCase = new CreateReservationUseCase(repositoryMock);

    const dto: CreateReservationDTO = {
      idEvent: 2,
      idUser: {id: 1, name: "Roland DJENWA", phone: 656, email: "rdjenwaroland@gmail.com", password: 'passsord',role: "CUSTOMER"},
      numberPlace: 2,
    };

    const tt : Omit<Category, "id"> ={ title: "Tech", description: "Technology related articles" };

    const result = useCase.execute(dto);

    expect(result).toEqual(reservationMock);
    expect(repositoryMock.createReservation).toHaveBeenCalledWith(dto);
  });
});
