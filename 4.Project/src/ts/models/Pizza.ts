
import { DataResource } from "../services/DataResource";
  export interface PizzaModel {
    title:string
    description:string
    toppings:string[]
   
    price:number
}

export const Pizza = new DataResource<PizzaModel>("http://localhost:3000/pizzas");