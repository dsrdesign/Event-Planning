import { CategoryRepository } from "@/domain/repositories/category.repository";
import { CreateCategoryDTO } from "@/domain/dtos/category/create-category.dto";
import { Category } from "@/domain/models/Category";
import { CreateCategoryUseCase } from "@/domain/use-cases/category/create-category.use-case";
import { CATEGORIES } from "@/constants/categories";

const mockCategoryRepository = {
  createCategory: jest.fn(),
} as unknown as CategoryRepository;

describe("CreateCategoryUseCase", () => {
  let useCase: CreateCategoryUseCase;

  beforeEach(() => {
    useCase = new CreateCategoryUseCase(mockCategoryRepository);
  });

  it("should call repository and return a new category", () => {
    const dto: CreateCategoryDTO = {
      title: "Tech",
      description: "Technology related articles",
    };

    const fakeCategory: Category = CATEGORIES[0]
    mockCategoryRepository.createCategory = jest.fn().mockReturnValue(fakeCategory);

    const result = useCase.execute(dto);

    expect(mockCategoryRepository.createCategory).toHaveBeenCalledWith(dto);
    expect(result).toEqual(fakeCategory);
  });
});
