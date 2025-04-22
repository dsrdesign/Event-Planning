import { UpdateCapacityEventUseCase } from "@/domain/use-cases/event/update-capacity-event.use-case";

describe("UpdateCapacityEventUseCase", () => {
  const repositoryMock = {
    updateCapcityEvent: jest.fn().mockReturnValue(true),
  } as any;

  it("should update the capacity of the event", () => {
    const useCase = new UpdateCapacityEventUseCase(repositoryMock);
    const result = useCase.execute(1, 150);
    expect(result).toBe(true);
    expect(repositoryMock.updateCapcityEvent).toHaveBeenCalledWith(1, 150);
  });
});
