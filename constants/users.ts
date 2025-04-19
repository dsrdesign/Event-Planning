import { User } from "../core/models/User";

export const MOCK_USERS = [
     {
       id: 1,
       email: "admin@event.com",
       password: "admin123",
       phone: 659022879,
       role: "ADMIN",
       name: "Kola Group"
     },
     {
       id: 2,
       email: "customer@event.com",
       password: "client123",
       phone: 659022879,
       role: "CUSTOMER",
       name: "Roland DJENWA"
     },
     {
      id: 3,
      email: "a",
      password: "123",
      phone: 659022879,
      role: "CUSTOMER",
      name: "Claude BEKER"
    }
   ] as User[];

