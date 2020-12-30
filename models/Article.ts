import { v4 } from "https://deno.land/std@0.82.0/uuid/mod.ts";

export class Article{
    ArticleId: string;
    ArticleTitle: string;
    ArticleDescription: string;
    ArticlePrice: number;
    ArticlePicture?: number;

    constructor(artTitle: string, artDesc:string, artPrice: number, artPic?: number) {
        this.ArticleId = v4.generate();
        this.ArticleTitle = artTitle;
        this.ArticleDescription = artDesc;
        this.ArticlePrice = artPrice;
        this.ArticlePicture = artPic;
    }
}