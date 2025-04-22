import { DeleteEventUseCase } from "@/domain/use-cases/event/delete-event.use-case";

describe("DeleteEventUseCase", () => {
  const repositoryMock = {
    deleteEvent: jest.fn().mockReturnValue(true),
  } as any;

  it("should delete an event by id", () => {
    const useCase = new DeleteEventUseCase(repositoryMock);
    const result = useCase.execute(1);
    expect(result).toBe(true);
    expect(repositoryMock.deleteEvent).toHaveBeenCalledWith(1);
  });
});
