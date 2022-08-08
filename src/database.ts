import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Kuhub*28',
    database:'restapi',
    port: 5432
});

module.exports={pool};