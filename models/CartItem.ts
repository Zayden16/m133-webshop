export class CartItem{
    ArticleId: string;
    Amount:number;
    constructor(ArtId: string, amount: number) {
        this.ArticleId = ArtId;
        this.Amount =amount;
    }
}