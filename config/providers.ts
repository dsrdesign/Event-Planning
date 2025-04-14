import { HttpCategory } from "@/core/gateways/http/category.http";
import { HttpEvent } from "@/core/gateways/http/event.http";
import { HttpReservation } from "@/core/gateways/http/reservation.http";
import { HttpUser } from "@/core/gateways/http/user.http";
import { InMemoryCategory } from "@/core/gateways/inMemory/category.inMemory";
import { InMemoryEvent } from "@/core/gateways/inMemory/event.inMemory";
import { InMemoryReservation } from "@/core/gateways/inMemory/reservation.inMemory";
import { InMemoryUser } from "@/core/gateways/inMemory/user.inMemory";
import { CategoryRepository } from "@/core/repositories/category.repository";
import { EventRepository } from "@/core/repositories/event.repository";
import { ReservationRepository } from "@/core/repositories/reservation.repository";
import { UserRepository } from "@/core/repositories/user.repository";

const isDevelopment = true; 

export const UserGateway: UserRepository = isDevelopment ? new InMemoryUser() : new HttpUser();
export const EventGateway: EventRepository = isDevelopment ? new InMemoryEvent() : new HttpEvent();
export const CategoryGateway: CategoryRepository = isDevelopment ? new InMemoryCategory() : new HttpCategory();
export const ReservationGateway: ReservationRepository = isDevelopment ? new InMemoryReservation() : new HttpReservation();
