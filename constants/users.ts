import { User } from "../domain/models/User";

export const USERS = [
     {
       id: 1,
       email: "kola@group.com",
       password: "kola",
       phone: 659022879,
       role: "ADMIN",
       name: "Kola Group"
     },
     {
       id: 2,
       email: "roland@group.com",
       password: "roland",
       phone: 659022879,
       role: "CUSTOMER",
       name: "Roland DJENWA"
     },
     {
      id: 3,
      email: "fred@group",
      password: "123",
      phone: 659022879,
      role: "CUSTOMER",
      name: "Claude BEKER"
    },
    {
      id: 4,
      email: "a",
      password: "1",
      phone: 659022879,
      role: "CUSTOMER",
      name: "Claude BEKER"
    }
   ] as User[];

