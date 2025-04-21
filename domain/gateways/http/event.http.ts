import { CreateEventDTO } from "@/domain/dtos/event/create-event.dto"
import { UpdateEventDTO } from "@/domain/dtos/event/update-event.dto"
import { Event } from "@/domain/models/Event"
import { EventRepository } from "@/domain/repositories/event.repository"


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