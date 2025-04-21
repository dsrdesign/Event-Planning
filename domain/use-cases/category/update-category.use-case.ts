import { CategoryRepository } from "@/domain/repositories/category.repository";
import { UpdateCategoryDTO } from "@/domain/dtos/category/update-category.dto";

export class UpdateCategoryUseCase {

  constructor(private readonly categoryRepository: CategoryRepository) {}
   execute( id : number, data: UpdateCategoryDTO): boolean {
     return this.categoryRepository.updateCategory(id, data);
  }

}
