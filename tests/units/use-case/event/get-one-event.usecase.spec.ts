import { EVENTS } from "@/constants/events";
import { Event } from "@/domain/models/Event";
import { GetOneEventUseCase } from "@/domain/use-cases/event/getOne-event.use-case";

describe("GetOneEventUseCase", () => {
  const event: Event = EVENTS[3];

  const repositoryMock = {
    getOneEvent: jest.fn().mockReturnValue(event),
  } as any;

  it("should return event by ID", () => {
    const useCase = new GetOneEventUseCase(repositoryMock);
    const result = useCase.execute(1);
    expect(result).toEqual(event);
    expect(repositoryMock.getOneEvent).toHaveBeenCalledWith(1);
  });
});
