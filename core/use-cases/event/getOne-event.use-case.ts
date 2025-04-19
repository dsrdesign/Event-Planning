import { EventRepository } from "@/core/repositories/event.repository";
import { CreateEventDTO } from "@/core/dtos/event/create-event.dto";
import { Event } from "@/core/models/Event";


export class GetOneEventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

   execute(id: number): Event {
     return this.eventRepository.getOneEvent(id);
  }
}
