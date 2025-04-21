export type RegisterCustomerDTO = {
  fullName: string,
  email: string,
  password: string,
  phone: number,
  role: "ADMIN" | "CUSTOMER"
}