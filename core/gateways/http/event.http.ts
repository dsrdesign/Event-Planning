import { CreateEventDTO } from "@/core/dtos/event/create-event.dto"
import { UpdateEventDTO } from "@/core/dtos/event/update-event.dto"
import { Event } from "@/core/models/Event"
import { EventRepository } from "@/core/repositories/event.repository"


export class HttpEvent implements EventRepository {

     getAllEvent(): Event[]{
          return [] as Event[]
     };

     getOneEvent(idEvent: number): Event{
          return {} as Event
     };

     createEvent(newEvent: CreateEventDTO): Event{
          return {} as Event
     };

     updateEvent(id: number, updateEvent: UpdateEventDTO): boolean{
          return {} as boolean
     };

     updateCapcityEvent(idEvent: number, capacity: number): boolean{
          return {} as boolean
     };
     
     deleteEvent(idEvent: number): boolean{
          return {} as boolean
     };
}