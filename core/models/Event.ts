import { Category } from "./Category"

export type Event = {
     id: string,
     title: string,
     date: Date,
     time: string
     location: string,
     capacity: number,
     decription: string,
     image: string,
     category: Category
}