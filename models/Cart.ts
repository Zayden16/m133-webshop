import { v4 } from "https://deno.land/std@0.82.0/uuid/mod.ts";
import { Article } from "../deps.ts";
import { CartItem } from "./CartItem.ts";

export class Cart{
    CartId: string;
    CartItems: CartItem[];

    constructor() {
        this.CartId = v4.generate();
        this.CartItems = [];
     }
}