import { EventRepository } from "@/core/repositories/event.repository";
import { CreateEventDTO } from "@/core/dtos/event/create-event.dto";
import { Event } from "@/core/models/Event";

export class CreateEventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

   execute(data: CreateEventDTO): Event {
     return this.eventRepository.createEvent(data);
  }
}
