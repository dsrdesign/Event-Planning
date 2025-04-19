import { create } from 'zustand';
import { Category } from '@/core/models/Category';
import { CATEGORIES } from '@/constants/categories';

type CategoryStore = {
     categories: Category[];
     addCategory: (category: Category) => void;
     updateCategory: (id: number, updatedCategory: Category) => void; // Utilisez `number` si l'ID est de type number
     deleteCategory: (id: number) => void; // Utilisez `number` si l'ID est de type number
     getCategoryById: (id: number) => Category | undefined;
};

export const useCategoryStore = create<CategoryStore>((set, get) => ({
     categories: CATEGORIES,
     addCategory: (category) =>
          set((state) => ({ categories: [...state.categories, category] })),

     updateCategory: (id, updatedCategory) =>
          set((state) => ({
               categories: state.categories.map((cat) =>
                    cat.id === id ? updatedCategory : cat
               ),
          })),

     deleteCategory: (id) =>
          set((state) => ({
               categories: state.categories.filter((cat) => cat.id !== id),
          })),
          
     getCategoryById: (id) => get().categories.find((e) => e.id === id),
}));