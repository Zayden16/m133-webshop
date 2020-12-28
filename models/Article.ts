import {
    DataTypes,
    Model
  } from 'https://deno.land/x/denodb/mod.ts';

export class Article extends Model{
    static table = 'Articles';
    static timestamps = true;
    static fields = {
        ArticleId: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        ArticleTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ArticleDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ArticlePicture: {
            type: DataTypes.BINARY,
            unique: true,
            allowNull: false,
        },
        ArticlePrice: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    }
}