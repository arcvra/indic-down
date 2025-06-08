import { pool } from "#database/config.js";

export const listLogs = () => pool.query(`
    SELECT 
        logs.id, 
        logs.created_at,
        types.name AS type,
        severities.name AS severity,
        severities.level AS level
    FROM logs 
    JOIN types ON logs.type_id = types.id
    JOIN severities ON types.severity_id = severities.id
    ORDER BY logs.created_at DESC;
     `);