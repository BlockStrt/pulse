import * as dotenv from 'dotenv';
dotenv.config();
import postgres from 'postgres'




const sql = postgres({
    host     : process.env.POSTGRES_HOST,
    port     : Number(process.env.POSTGRES_PORT), // Ensure port is a number
    database : process.env.POSTGRES_DB,
    username : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD,         // Password of database user

})

export default sql;