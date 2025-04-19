import { RepositoryContext, RepositoryContextType } from "@/contexts/repository-provider";
import { useContext } from "react";

export const useRepositories = (): RepositoryContextType => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepositories must be used within a RepositoryProvider");
  }
  return context;
};

