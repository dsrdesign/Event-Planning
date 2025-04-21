import { CategoryRepository } from "@/domain/repositories/category.repository";
import { Category } from "@/domain/models/Category";


export class GetOneCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

   execute(id: number): Category {
     return this.categoryRepository.getOneCategory(id);
  }
}
