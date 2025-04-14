import { Event } from "./Event"
import { User } from "./User"

export type Reservation = {
     id: string,
     user: User,
     Event: Event,
     numberPlace: number
}