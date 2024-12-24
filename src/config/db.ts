import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';


if(!process.env.NEXT_PUBLIC_DATABASE_URL){
    throw new Error("Database URL is not set. Please ensure .env File is available")
}

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);

const db = drizzle({ client: sql });


export default db