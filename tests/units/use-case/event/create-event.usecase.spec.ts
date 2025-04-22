import { EVENTS } from "@/constants/events";
import { CreateEventDTO } from "@/domain/dtos/event/create-event.dto";
import { Event } from "@/domain/models/Event";
import { CreateEventUseCase } from "@/domain/use-cases/event/create-event.use-case";

describe("CreateEventUseCase", () => {
  const eventMock: Event = EVENTS[0];

  const repositoryMock = {
    createEvent: jest.fn().mockReturnValue(eventMock),
  } as any;

  it("should create a new event", () => {
    const useCase = new CreateEventUseCase(repositoryMock);
    const dto: CreateEventDTO = {
      title: "Event Test",
      date: new Date(),
      time: "18:00",
      location: "Paris",
      capacity: 100,
      description: "Test Event Description",
      idCategory: 1,
    };

    const result = useCase.execute(dto);

    expect(result).toEqual(eventMock);
    expect(repositoryMock.createEvent).toHaveBeenCalledWith(dto);
  });
});
