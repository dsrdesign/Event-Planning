import { EVENTS } from "@/constants/events";
import { Event } from "@/domain/models/Event";
import { GetAllEventsUseCase } from "@/domain/use-cases/event/getAll-event.use-case";

describe("GetAllEventsUseCase", () => {
  const events: Event[] = EVENTS;

  const repositoryMock = {
    getAllEvent: jest.fn().mockReturnValue(events),
  } as any;

  it("should return all events", () => {
    const useCase = new GetAllEventsUseCase(repositoryMock);
    const result = useCase.execute();
    expect(result).toEqual(events);
    expect(repositoryMock.getAllEvent).toHaveBeenCalled();
  });
});
