import { EVENTS } from "@/constants/events"
import { CreateEventDTO } from "@/core/dtos/event/create-event.dto"
import { UpdateEventDTO } from "@/core/dtos/event/update-event.dto"
import { Category } from "@/core/models/Category"
import { Event } from "@/core/models/Event"
import { EventRepository } from "@/core/repositories/event.repository"
import { useCategoryStore } from "@/store/category.store"
import { useEventStore } from "@/store/event.store"


export class InMemoryEvent implements EventRepository {

     getAllEvent(): Event[] {
          return useEventStore.getState().events
     };

     getOneEvent(idEvent: number): Event {
          const event = EVENTS.find(event => event.id == idEvent)
          return event as Event

     };

     createEvent(newEvent: CreateEventDTO): Event {

          const { title, date, time, location, capacity, description, image, idCategory } = newEvent
          const category = useCategoryStore.getState().getCategoryById(idCategory) as Category
          const event: Event = { id: Math.random(), title, date, time, capacity, location, description, category }

          useEventStore.getState().addEvent(event);

          return event
     };

     updateEvent(id: number, updateEvent: UpdateEventDTO): boolean {
          const existingEvent = useEventStore.getState().getEventById(id);

          if (!existingEvent) {
               return false; // Si la catégorie n'existe pas, retourner undefined
          }

          const { title, date, time, location, capacity, description, image, idCategory } = updateEvent
          const category = useCategoryStore.getState().getCategoryById(idCategory) as Category
          const event: Event = { id: Math.random(), title, date, time, capacity, location, description, category }

          useEventStore.getState().updateEvent(id, event);

          return true
     };

     updateCapcityEvent(idEvent: number, capacity: number): boolean{
          const existingEvent = useEventStore.getState().getEventById(idEvent);

          if (!existingEvent) {
               return false; // Si la catégorie n'existe pas, retourner undefined
          }

          useEventStore.getState().updateCapacityEvent(idEvent, capacity);

          return true
     };
     

     deleteEvent(idEvent: number): boolean {

          const existingEvent = useEventStore.getState().getEventById(idEvent);

          if (!existingEvent) {
               return false; // Si la catégorie n'existe pas, retourner false
          }

          useEventStore.getState().deleteEvent(idEvent);
          return true
     };
}

