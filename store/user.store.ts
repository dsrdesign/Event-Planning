import { create } from 'zustand';
import { User } from '@/domain/models/User';
import { USERS } from '@/constants/users';

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: number, updatedUser: User) => void;
  deleteUser: (id: number) => void;
  getUserById: (id: number) => User | undefined;
};

export const useUserStore = create<UserStore>((set, get) => ({
  users: USERS,
  addUser: (user) =>
    set((state) => ({ users: [...state.users, user] })),

  updateUser: (id, updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  getUserById: (id) => get().users.find((e) => e.id === id),
}));