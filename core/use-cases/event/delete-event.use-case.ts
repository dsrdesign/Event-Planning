import { EventRepository } from "@/core/repositories/event.repository";

export class DeleteEventUseCase {
  constructor(private readonly eventRepository: EventRepository) {}

   execute(id: number): boolean {
     return this.eventRepository.deleteEvent(id);
  }
}
