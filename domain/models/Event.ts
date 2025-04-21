import { Category } from "./Category"

export type Event = {
     id: number,
     title: string,
     date: Date,
     time: string
     location: string,
     capacity: number,
     description: string,
     image?: string,
     category: Category
}