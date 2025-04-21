import { Category } from "@/domain/models/Category";
import { CategoryRepository } from "@/domain/repositories/category.repository";

export class GetAllCategoriesUseCase {
     
  constructor(private readonly categoryRepository: CategoryRepository) {}

  execute(): Category[] {
    return this.categoryRepository.getAllCategories();
  }
}
