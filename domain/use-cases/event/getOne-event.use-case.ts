import { EventRepository } from "@/domain/repositories/event.repository";
import { CreateEventDTO } from "@/domain/dtos/event/create-event.dto";
import { Event } from "@/domain/models/Event";


export class GetOneEventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

   execute(id: number): Event {
     return this.eventRepository.getOneEvent(id);
  }
}
