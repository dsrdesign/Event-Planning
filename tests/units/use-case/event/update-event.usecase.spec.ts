import { UpdateEventDTO } from "@/domain/dtos/event/update-event.dto";
import { UpdateEventUseCase } from "@/domain/use-cases/event/update-event.use-case";

describe("UpdateEventUseCase", () => {
  const repositoryMock = {
    updateEvent: jest.fn().mockReturnValue(true),
  } as any;

  it("should update the event by ID", () => {
    const useCase = new UpdateEventUseCase(repositoryMock);
    const updateData: UpdateEventDTO = {
      title: "Event Test",
      date: new Date(),
      time: "18:00",
      location: "Paris",
      capacity: 100,
      description: "Test Event Description",
      idCategory: 1,
    };

    const result = useCase.execute(1, updateData);
    expect(result).toBe(true);
    expect(repositoryMock.updateEvent).toHaveBeenCalledWith(1, updateData);
  });
});
