import { create } from 'zustand';
import { Event } from '@/domain/models/Event';
import { EVENTS } from '@/constants/events';

type EventStore = {
     events: Event[];
     addEvent: (event: Event) => void;
     updateEvent: (id: number, updatedEvent: Event) => void;
     updateCapacityEvent: (id: number, capacity: number) => void;
     deleteEvent: (id: number) => void;
     getEventById: (id: number) => Event | undefined;
};

export const useEventStore = create<EventStore>((set, get) => ({
     events: EVENTS,
     addEvent: (event) =>
          set((state) => ({ events: [...state.events, event] })),

     updateEvent: (id, updatedEvent) =>
          set((state) => ({
               events: state.events.map((event) =>
                    event.id === id ? updatedEvent : event
               ),
          })),

     updateCapacityEvent: (id: number, capacity: number) =>
          set((state) => ({
               events: state.events.map((event) =>
                    event.id === id ? { ...event, capacity } : event
               ),
          })),

     deleteEvent: (id) =>
          set((state) => ({
               events: state.events.filter((event) => event.id !== id),
          })),

     getEventById: (id) => get().events.find((e) => e.id === id),
}));