import { CategoryRepository } from "@/domain/repositories/category.repository";
import { UpdateCategoryDTO } from "@/domain/dtos/category/update-category.dto";
import { UpdateCategoryUseCase } from "@/domain/use-cases/category/update-category.use-case";

describe("UpdateCategoryUseCase", () => {
  it("devrait mettre à jour une catégorie avec succès", () => {
    const mockRepository: CategoryRepository = {
      updateCategory: jest.fn().mockReturnValue(true),
    } as any;

    const updateDto: UpdateCategoryDTO = {
      title: "New Category Name",
      description: "New Category Description",
    };

    const useCase = new UpdateCategoryUseCase(mockRepository);
    const result = useCase.execute(1, updateDto);

    expect(mockRepository.updateCategory).toHaveBeenCalledWith(1, updateDto);
    expect(result).toBe(true);
  });
});
