import { Category } from "@/core/models/Category";
import { CategoryRepository } from "@/core/repositories/category.repository";

export class GetAllCategoriesUseCase {
     
  constructor(private readonly categoryRepository: CategoryRepository) {}

  execute(): Category[] {
    return this.categoryRepository.getAllCategories();
  }
}
