import { CategoryRepository } from "@/domain/repositories/category.repository";
import { DeleteCategoryUseCase } from "@/domain/use-cases/category/delete-categoy.use-case";

describe("DeleteCategoryUseCase", () => {
  it("devrait supprimer une catégorie avec succès", () => {
    const mockRepository: CategoryRepository = {
      deleteCategory: jest.fn().mockReturnValue(true),
    } as any;

    const useCase = new DeleteCategoryUseCase(mockRepository);
    const result = useCase.execute(1);

    expect(mockRepository.deleteCategory).toHaveBeenCalledWith(1);
    expect(result).toBe(true);
  });
});
