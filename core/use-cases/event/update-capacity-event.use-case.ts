import { EventRepository } from "@/core/repositories/event.repository";

export class UpdateCapacityEventUseCase {

  constructor(private readonly eventRepository: EventRepository) {}
   execute( id : number, capacity: number): boolean {
     return this.eventRepository.updateCapcityEvent(id, capacity);
  }

}
