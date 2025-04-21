import React, { createContext, useMemo } from "react";
import { EventRepository } from "@/domain/repositories/event.repository";
import { ReservationRepository } from "@/domain/repositories/reservation.repository";
import { UserRepository } from "@/domain/repositories/user.repository";
import { InMemoryEvent } from "@/domain/gateways/inMemory/event.inMemory";
import { InMemoryReservation } from "@/domain/gateways/inMemory/reservation.inMemory";
import { InMemoryUser } from "@/domain/gateways/inMemory/user.inMemory";
import { CategoryRepository } from "@/domain/repositories/category.repository";
import { InMemoryCategory } from "@/domain/gateways/inMemory/category.inMemory";

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
