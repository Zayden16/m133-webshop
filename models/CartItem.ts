import data from "../data/data.ts";
import { Article } from "../deps.ts";

export class CartItem{
    Article;
    Amount: number;
    constructor(ArtId: string, amount: number) {
        this.Article = data.getArticle(ArtId);
        this.Amount = amount;
    }
}