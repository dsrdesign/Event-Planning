import { CategoryRepository } from "@/core/repositories/category.repository";
import { CreateCategoryDTO } from "@/core/dtos/category/create-category.dto";
import { Category } from "@/core/models/Category";

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

   execute(data: CreateCategoryDTO): Category {
     return this.categoryRepository.createCategory(data);
  }
}
