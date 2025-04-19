import { CreateCategoryDTO } from "@/core/dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "@/core/dtos/category/update-category.dto";
import { Category } from "@/core/models/Category";
import { CategoryRepository } from "@/core/repositories/category.repository";


export class HttpCategory implements CategoryRepository {

     getAllCategories(): Category[] {
          return [] as Category[];
     };

     createCategory(newCategory: CreateCategoryDTO): Category{
          return {} as Category
     };
     
     updateCategory(id: number, updateCategory: UpdateCategoryDTO): boolean{
          return {} as boolean
     };

     deleteCategory(id: number ): boolean{
          return {} as true
     }
}