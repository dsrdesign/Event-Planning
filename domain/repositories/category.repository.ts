import { CreateCategoryDTO } from "../dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "../dtos/category/update-category.dto";
import { Category } from "../models/Category";

export interface CategoryRepository {
     getAllCategories(): Category[];
     getOneCategory(id: number): Category;
     createCategory(newCategory: CreateCategoryDTO): Category;
     updateCategory( id: number, updateCategory: UpdateCategoryDTO): boolean;
     deleteCategory(id: number): boolean
}