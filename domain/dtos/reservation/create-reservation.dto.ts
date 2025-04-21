import { User } from "@/domain/models/User"

export type CreateReservationDTO = {
  idUser: User,
  idEvent: number,
  numberPlace: number
}