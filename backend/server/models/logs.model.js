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


/**
 * Inserta un nuevo log en la base de datos con su tipo de error y la fecha/hora de creación
 * 
 * @async
 * @function insertLog
 * @param {number} type_id - ID del tipo de error (relacionado con la tabla `types`)
 * @param {string} created_at - Fecha y hora del registro
 * @returns {Promise<import('pg').QueryResult>} - Resultado de la operación de inserción
 */
export const insertLog = (type_id) => pool.query(`
    INSERT INTO logs
    (type_id)
    VALUES ($1)
    `, [type_id]);


/**
 * Filtra los registros de logs según tipo (nombre) 
 * 
 * @async
 * @function filterLogs
 * @param {string} type - Nombre del tipo de error registrado
 * @returns {Promise<import('pg').QueryResult<LogRow>>} 
 */
export const filterLogs = (type) => pool.query(`
    SELECT
        logs.id,
        logs.created_at,
        types.name AS type,
        severities.name AS severity,
        severities.level AS level
    FROM logs 
    JOIN types ON logs.type_id = types.id
    JOIN severities ON types.severity_id = severities.id
    WHERE types.name = $1
    `, [type]);