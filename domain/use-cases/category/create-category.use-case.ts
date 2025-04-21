import { CategoryRepository } from "@/domain/repositories/category.repository";
import { CreateCategoryDTO } from "@/domain/dtos/category/create-category.dto";
import { Category } from "@/domain/models/Category";

export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

   execute(data: CreateCategoryDTO): Category {
     return this.categoryRepository.createCategory(data);
  }
}
