import { CreateEventDTO } from "../dtos/event/create-event.dto";
import { UpdateEventDTO } from "../dtos/event/update-event.dto";

export interface EventRepository {
     getAllEvent(): Event[];
     getOneEvent(idEvent: string): Event;
     createEvent(newEvent: CreateEventDTO): Event;
     updateEvent(updateEvent: UpdateEventDTO): Event;
     deleteEvent(idEvent: string): boolean;
}