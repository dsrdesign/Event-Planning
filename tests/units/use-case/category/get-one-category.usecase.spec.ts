import { CategoryRepository } from "@/domain/repositories/category.repository";
import { Category } from "@/domain/models/Category";
import { GetOneCategoryUseCase } from "@/domain/use-cases/category/getOne-category.use-case";
import { CATEGORIES } from "@/constants/categories";

describe("GetOneCategoryUseCase", () => {
  it("devrait retourner une seule catégorie par ID", () => {
    const category: Category = CATEGORIES[0];

    const mockRepository: CategoryRepository = {
      getOneCategory: jest.fn().mockReturnValue(category),
    } as any;

    const useCase = new GetOneCategoryUseCase(mockRepository);
    const result = useCase.execute(1);

    expect(mockRepository.getOneCategory).toHaveBeenCalledWith(1);
    expect(result).toEqual(category);
  });
});
