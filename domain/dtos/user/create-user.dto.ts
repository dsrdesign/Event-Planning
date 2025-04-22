export type CreateUserDTO = {
  name: string,
  email: string,
  password: string,
  phone: number,
  role: "ADMIN" | "CUSTOMER"
}