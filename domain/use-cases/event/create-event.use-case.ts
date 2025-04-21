import { EventRepository } from "@/domain/repositories/event.repository";
import { CreateEventDTO } from "@/domain/dtos/event/create-event.dto";
import { Event } from "@/domain/models/Event";

export class CreateEventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

   execute(data: CreateEventDTO): Event {
     return this.eventRepository.createEvent(data);
  }
}
