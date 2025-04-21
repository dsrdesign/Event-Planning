import { createContext, useContext, useState, useEffect } from "react";
import { MOCK_USERS } from "@/constants/users";
import { User } from "@/domain/models/User";
import React from "react";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  loading: true,
});

export const AuthProvider : React.FC<React.PropsWithChildren> = ({ children })  => {
  console.log("AuthProvider: Rendering...");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("AuthProvider: Initializing...");
    console.log("AuthProvider: MOCK_USERS =", MOCK_USERS);
    setTimeout(() => {
      // Simulez un utilisateur connecté pour les tests
      const defaultUser = MOCK_USERS[0]; // Remplacez par une logique réelle si nécessaire
      setUser(null);
      setLoading(false);
      console.log("AuthProvider: User set to", defaultUser);
      console.log("AuthProvider: Loading set to false");
    }, 500);
  }, []);

  const login = (email: string, password: string): boolean => {
    const found = MOCK_USERS.find(
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
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
