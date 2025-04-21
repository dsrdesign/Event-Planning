import { CreateCategoryDTO } from "@/domain/dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "@/domain/dtos/category/update-category.dto";
import { Category } from "@/domain/models/Category";
import { CategoryRepository } from "@/domain/repositories/category.repository";
import { useCategoryStore } from "@/store/category.store";

export class InMemoryCategory implements CategoryRepository {
  
  getAllCategories(): Category[] {
    return useCategoryStore.getState().categories;
  }

  getOneCategory(id: number): Category  {
    return useCategoryStore.getState().getCategoryById(id) as Category;
  }

  createCategory(newCategory: CreateCategoryDTO): Category {
    const category: Category = {
      id: Math.random(), // Générer un ID unique
      title: newCategory.title,
      description: newCategory.description,
    };

    useCategoryStore.getState().addCategory(category);
    return category;
  }

  updateCategory(id: number, updateCategory: UpdateCategoryDTO): boolean {
    const existingCategory = useCategoryStore.getState().getCategoryById(id);
    
    if (!existingCategory) {
      return false;
    }

    const updatedCat: Category = {
      id,
      title: updateCategory.title,
      description: updateCategory.description,
    };

    useCategoryStore.getState().updateCategory(id, updatedCat);
    return true;
  }

  deleteCategory(id: number): boolean {
    const existingCategory = useCategoryStore.getState().getCategoryById(id);
    
    if (!existingCategory) {
      return false; 
    }

    useCategoryStore.getState().deleteCategory(id);
    return true;
  }
}