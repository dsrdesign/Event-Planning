import { Event } from "./Event"
import { User } from "./User"

export type Reservation = {
     id: number,
     user: User | null,
     event?: Event,
     numberPlace: number
}