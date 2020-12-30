import { Article } from "../deps.ts";

class Data{
    articlesList: Article[] = [
        {"ArticleId":"cb242b9e-0bed-44fb-a51c-a9d1fe346e6c","ArticleTitle":"XPhone Basic Edition","ArticleDescription":"The XPhone Basic Edition ist designed for optimum cost-effectiveness","ArticlePrice":150},
        {"ArticleId":"650b566b-4013-4953-b7f9-d4b5ae086259","ArticleTitle":"XPhone Standard Edition","ArticleDescription":"The XPhone Standard Edition ist designed for standard cost-effectiveness","ArticlePrice":1500},
        {"ArticleId":"02057431-93a8-4f27-928c-44500df48646","ArticleTitle":"XPhone VVIP Edition","ArticleDescription":"The XPhone VVIP Edition ist designed for the least cost-effectiveness","ArticlePrice":2500}
    ];
    getAllArticles() {
        return this.articlesList;
    }

    getArticle(id: string){
        let i = 0;
        for (; i < this.articlesList.length; i++) {
            if (this.articlesList[i].ArticleId == id) {
                return(this.articlesList[i]);
            }
        }
    }

    createArticle(article: Article){
        this.articlesList.push(article);
    }

    deleteArticle(id: string){
        if(id in this.articlesList){
            const filteredArray = this.articlesList.filter(function(element){
                return element.ArticleId !== id;
            });
            this.articlesList = filteredArray;
        }
        else {
            // TODO
            // The Article can be deleted again and again, even if it doesn't exist
            return new Deno.errors.NotFound;
        }
    }
}
const data = new Data();
export default data;