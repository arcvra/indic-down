import { pool } from "#database/config.js";

export const listTypes = () => pool.query(`
    SELECT 
        types.id,
        types.severity_id AS severity,
        types.name AS type,
        severities.name AS severity,
        severities.level AS level
    FROM types 
    JOIN severities ON types.severity_id = severities.id
    ORDER BY types.severity_id ASC;
     `);