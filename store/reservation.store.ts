import { create } from 'zustand';
import { Reservation } from '@/domain/models/Reservation';
import { RESERVATIONS } from '@/constants/reservations';

type ReservationStore = {
  cancelReservation(id: number): void;
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
  getReservationById: (id: number) => Reservation | undefined;
  getReservationsByUserId: (userId: number) => Reservation[];
  getReservationsByEventId: (eventId: number) => Reservation[];
};

export const useReservationStore = create<ReservationStore>((set, get) => ({
  reservations: RESERVATIONS,
  addReservation: (reservation) =>
    set((state) => ({ reservations: [...state.reservations, reservation] })),
  getReservationById: (id) => get().reservations.find((e) => e.id === id),
  getReservationsByUserId: (userId) =>
    get().reservations.filter((reservation) => reservation.user?.id === userId),
  getReservationsByEventId: (eventId) =>
    get().reservations.filter((reservation) => reservation.event?.id === eventId),

  cancelReservation: (id) =>
    set((state) => ({
      reservations: state.reservations.filter((reservation) => reservation.id !== id),
    })),
}));