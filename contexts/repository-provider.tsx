import React, { createContext, useMemo } from "react";
import { EventRepository } from "@/core/repositories/event.repository";
import { ReservationRepository } from "@/core/repositories/reservation.repository";
import { UserRepository } from "@/core/repositories/user.repository";
import { InMemoryEvent } from "@/core/gateways/inMemory/event.inMemory";
import { InMemoryReservation } from "@/core/gateways/inMemory/reservation.inMemory";
import { InMemoryUser } from "@/core/gateways/inMemory/user.inMemory";
import { CategoryRepository } from "@/core/repositories/category.repository";
import { InMemoryCategory } from "@/core/gateways/inMemory/category.inMemory";

export type RepositoryContextType = {
  eventRepository: EventRepository;
  reservationRepository: ReservationRepository;
  categoryRepository: CategoryRepository;
  userRepository: UserRepository;
};

export const RepositoryContext = createContext<RepositoryContextType | undefined>(undefined);

export const RepositoryProvider = ({ children }: { children: React.ReactNode }) => {
  const repositories = useMemo<RepositoryContextType>(() => ({
    eventRepository: new InMemoryEvent(),
    reservationRepository: new InMemoryReservation(),
    categoryRepository: new InMemoryCategory(),
    userRepository: new InMemoryUser(),
  }), []);

  return (
    <RepositoryContext.Provider value={repositories}>
      {children}
    </RepositoryContext.Provider>
  );
};

export default RepositoryProvider;
