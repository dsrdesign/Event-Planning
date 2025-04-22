import { CategoryRepository } from "@/domain/repositories/category.repository";
import { Category } from "@/domain/models/Category";
import { GetAllCategoriesUseCase } from "@/domain/use-cases/category/getAll-categories.use-case";
import { CATEGORIES } from "@/constants/categories";

describe("GetAllCategoriesUseCase", () => {
  it("devrait retourner toutes les catégories", () => {
    const categories: Category[] = CATEGORIES;

    const mockRepository: CategoryRepository = {
      getAllCategories: jest.fn().mockReturnValue(categories),
    } as any;

    const useCase = new GetAllCategoriesUseCase(mockRepository);
    const result = useCase.execute();

    expect(mockRepository.getAllCategories).toHaveBeenCalled();
    expect(result).toEqual(categories);
  });
});
