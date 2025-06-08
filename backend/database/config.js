import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

const sql = `
    CREATE TABLE IF NOT EXISTS severities (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        level TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS types (
        id SERIAL PRIMARY KEY,
        severity_id INTEGER NOT NULL REFERENCES severities(id),
        name TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS logs (
        id SERIAL PRIMARY KEY,
        type_id INTEGER NOT NULL REFERENCES types(id),
        severity_id INTEGER NOT NULL REFERENCES severities(id),
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

export const initDatabase = async () => {
    try {
        await pool.query(sql);
        console.log("Tablas creadas con éxito");
    } catch (err) {
        console.error("Error al ejecutar SQL: ", err);
    } finally {
        await pool.end();
    }
};