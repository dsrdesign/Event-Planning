import { createContext, useContext, useState, useEffect } from "react";
import { USERS } from "@/constants/users";
import { User } from "@/domain/models/User";
import React from "react";
import { useRepositories } from "@/hooks/useRepositorie";
import { GetOneUserUseCase } from "@/domain/use-cases/user/getOne-user.use-case";
import { GetAllUsersUseCase } from "@/domain/use-cases/user/getAll-user-case";
import { useFocusEffect } from "expo-router";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  refreshUsers:() => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  refreshUsers: () => {},
  loading: true,
});

export const AuthProvider : React.FC<React.PropsWithChildren> = ({ children })  => {

  const { userRepository } = useRepositories();
  const getOneUserUseCase = new GetOneUserUseCase(userRepository); 
  const getAllUsersUseCase = new GetAllUsersUseCase(userRepository); 
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([])




  useEffect(() => {
    console.log("AuthProvider: Initializing...");
    setTimeout(() => {
      setUser(null);
      setLoading(false);
      console.log("AuthProvider: Loading set to false");
    }, 500);
  }, []);

  const refreshUsers = () => {
    const listUsers  = getAllUsersUseCase.execute()
    setUsers(listUsers)
  };

  useFocusEffect(() => {
    const listUsers  = getAllUsersUseCase.execute()
    setUsers(listUsers)
    console.log("List des utilisateurs", users);
  }, undefined );

  const login = (email: string, password: string): boolean => {
    const listUsers  = getAllUsersUseCase.execute()
    setUsers(listUsers)
    const found = users.find(
      u => u.email === email && u.password === password
    );
    if (found) {
      console.log("AuthProvider: User found", found);
      
      setUser(found);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null)
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, refreshUsers, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
