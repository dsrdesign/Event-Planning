import { Event } from "@/domain/models/Event";
import { EventRepository } from "@/domain/repositories/event.repository";

export class GetAllEventsUseCase {
     
  constructor(private readonly eventRepository: EventRepository) {}

  execute(): Event[] {
    return this.eventRepository.getAllEvent();
  }
}
