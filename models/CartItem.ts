import data from "../data/data.ts";

export class CartItem{
    ArticleId: string;
    Amount: number;
    constructor(artId: string, amount: number) {
        this.ArticleId = artId;
        this.Amount = amount;
    }
}