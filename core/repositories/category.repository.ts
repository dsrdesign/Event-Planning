import { CreateCategoryDTO } from "../dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "../dtos/category/update-category.dto";
import { Category } from "../models/Category";

export interface CategoryRepository {
     getAllCategories(): Category[];
     createCategory(newCategory: CreateCategoryDTO): Category;
     updateCategory(updateCategory: UpdateCategoryDTO): Category;
     deleteCategory(): boolean
}