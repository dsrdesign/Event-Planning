import { Reservation } from "@/domain/models/Reservation";
import { EVENTS } from "./events";
import { MOCK_USERS } from "./users";

export const RESERVATIONS: Reservation[] = [
     { id: 1, user: MOCK_USERS[0], event: EVENTS[0], numberPlace: 2 },
     { id: 2, user: MOCK_USERS[0], event: EVENTS[1], numberPlace: 3 },
     { id: 3, user: MOCK_USERS[1], event: EVENTS[0], numberPlace: 1 },
     { id: 4, user: MOCK_USERS[1], event: EVENTS[1], numberPlace: 4 },
     { id: 5, user: MOCK_USERS[0], event: EVENTS[2], numberPlace: 1 },
     { id: 6, user: MOCK_USERS[1], event: EVENTS[2], numberPlace: 2 },
     { id: 7, user: MOCK_USERS[0], event: EVENTS[4], numberPlace: 1 },
     { id: 7, user: MOCK_USERS[1], event: EVENTS[5], numberPlace: 2 },
     { id: 9, user: MOCK_USERS[2], event: EVENTS[8], numberPlace: 1 },
     { id: 10, user: MOCK_USERS[0], event: EVENTS[3], numberPlace: 2 },
     { id: 11, user: MOCK_USERS[1], event: EVENTS[3], numberPlace: 4 },
     { id: 12, user: MOCK_USERS[2], event: EVENTS[7], numberPlace: 3 },
   ];