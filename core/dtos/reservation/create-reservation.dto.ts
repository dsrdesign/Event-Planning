import { User } from "@/core/models/User"

export type CreateReservationDTO = {
     idUser: User,
     idEvent: number,
     numberPlace: number
}