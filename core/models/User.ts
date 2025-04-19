export type User = {
     id: number,
     name: string,
     email: string,
     password: string,
     phone: number,
     role: "ADMIN" | "CUSTOMER"
}