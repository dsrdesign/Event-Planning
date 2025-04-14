import { CreateEventDTO } from "@/core/dtos/event/create-event.dto"
import { UpdateEventDTO } from "@/core/dtos/event/update-event.dto"
import { EventRepository } from "@/core/repositories/event.repository"


export class HttpEvent implements EventRepository {

     getAllEvent(): Event[]{
          return [] as Event[]
     };

     getOneEvent(idEvent: string): Event{
          return {} as Event
     };

     createEvent(newEvent: CreateEventDTO): Event{
          return {} as Event
     };

     updateEvent(updateEvent: UpdateEventDTO): Event{
          return {} as Event
     };
     
     deleteEvent(idEvent: string): boolean{
          return true
     };
}