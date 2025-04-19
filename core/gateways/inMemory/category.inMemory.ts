import { CreateCategoryDTO } from "@/core/dtos/category/create-category.dto";
import { UpdateCategoryDTO } from "@/core/dtos/category/update-category.dto";
import { Category } from "@/core/models/Category";
import { CategoryRepository } from "@/core/repositories/category.repository";
import { useCategoryStore } from "@/store/category.store";

export class InMemoryCategory implements CategoryRepository {
  
  getAllCategories(): Category[] {
    return useCategoryStore.getState().categories;
  }

  getCategoryById(id: number): Category | undefined {
    return useCategoryStore.getState().getCategoryById(id);
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
      return false; // Si la catégorie n'existe pas, retourner undefined
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
      return false; // Si la catégorie n'existe pas, retourner false
    }

    useCategoryStore.getState().deleteCategory(id);
    return true;
  }
}