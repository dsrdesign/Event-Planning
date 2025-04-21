import { CreateCategoryDTO } from "@/domain/dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "@/domain/dtos/category/update-category.dto";
import { Category } from "@/domain/models/Category";
import { CategoryRepository } from "@/domain/repositories/category.repository";


export class HttpCategory implements CategoryRepository {

     getAllCategories(): Category[] {
          return [] as Category[];
     };

     getOneCategory(id: number): Category {
          return {} as Category;
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