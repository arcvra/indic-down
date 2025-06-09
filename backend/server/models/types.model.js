import { pool } from "#database/config.js";
/**
* Devuelve todos los tipos de error existentes, con su nombre y nivel de severidad asociado, ordenados de menos a más crítico
* 
* @async
* @function listTypes
* @returns {Promise<import('pg').QueryResult<LogRow>>}
*/
export const listTypes = () => pool.query(`
    SELECT 
        types.id,
        types.severity_id,
        types.name AS type,
        severities.name AS severity,
        severities.level AS level
    FROM types 
    JOIN severities ON types.severity_id = severities.id
    ORDER BY types.severity_id ASC;
     `);

/**
* @typedef {Object} LogRow
* @property {number} id
* @property {string} type        Nombre del tipo de error
* @property {number} severity_id ID del nivel de severidad       
* @property {string} severity    Nombre de la severidad
* @property {string} level       Nivel de severidad (“Bajo, “Moderado", etc.)
*/