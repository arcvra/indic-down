import { pool } from "#database/config.js";
/**
 * Devuelve todos los logs registrados, con su tipo y nivel de severidad, ordenados de más reciente a más antiguo
 * 
 * @async
 * @function listLogs
 * @returns {Promise<import('pg').QueryResult<LogRow>>} - Resultado de la consulta (rows = LogRow[])
 */
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

/**
* @typedef {Object} LogRow
* @property {number} id
* @property {string} created_at  Fecha y hora de inserción
* @property {string} type        Nombre del tipo de error
* @property {string} severity    Nombre de la severidad
* @property {string} level       Nivel de severidad (“Bajo, “Moderado", etc.)
*/

export const insertLog = (type_id, created_at) => pool.query(`
    INSERT INTO logs
    (type_id, created_at)
    VALUES ($1, $2)
    `, [type_id, created_at]);