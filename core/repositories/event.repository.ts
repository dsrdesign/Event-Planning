import { CreateEventDTO } from "../dtos/event/create-event.dto";
import { UpdateEventDTO } from "../dtos/event/update-event.dto";
import { Event } from "../models/Event";

export interface EventRepository {
     getAllEvent(): Event[];
     getOneEvent(idEvent: number): Event;
     createEvent(newEvent: CreateEventDTO): Event;
     updateEvent(id: number, updateEvent: UpdateEventDTO): boolean;
     updateCapcityEvent(idEvent: number, capacity: number): boolean;
     deleteEvent(idEvent: number): boolean;
}