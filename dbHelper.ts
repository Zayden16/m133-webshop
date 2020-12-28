import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const env = config();

const db = new Database('postgres', {
    host: 'localhost',
    username: 'postgres',
    password: env.PASSWORD,
    database: 'm133-webshop',
    port: 5433,
  });

export default db;