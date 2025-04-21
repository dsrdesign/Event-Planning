export type UpdateEventDTO = {
  title: string,
  date: Date,
  time: string
  location: string,
  capacity: number,
  description: string,
  image?: string,
  idCategory: number
}