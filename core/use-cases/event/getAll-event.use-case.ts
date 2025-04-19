import { Event } from "@/core/models/Event";
import { EventRepository } from "@/core/repositories/event.repository";

export class GetAllEventsUseCase {
     
  constructor(private readonly eventRepository: EventRepository) {}

  execute(): Event[] {
    return this.eventRepository.getAllEvent();
  }
}
