import { CategoryRepository } from "@/core/repositories/category.repository";

export class DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

   execute(id: number): boolean {
     return this.categoryRepository.deleteCategory(id);
  }
}
