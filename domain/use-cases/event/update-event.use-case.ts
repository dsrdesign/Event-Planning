import { EventRepository } from "@/domain/repositories/event.repository";
import { UpdateEventDTO } from "@/domain/dtos/event/update-event.dto";

export class UpdateEventUseCase {

  constructor(private readonly eventRepository: EventRepository) {}
   execute( id : number, data: UpdateEventDTO): boolean {
     return this.eventRepository.updateEvent(id, data);
  }

}
