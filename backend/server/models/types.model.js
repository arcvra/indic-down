import { pool } from "#database/config.js";
/**
* Devuelve todos los tipos de error existentes, con su nombre y nivel de severidad asociado, ordenados de menos a más crítico
* 
* @async
* @function listTypes
* @returns {Promise<import('pg').QueryResult<TypeRow>>}
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
* @typedef {Object} TypeRow
* @property {number} id
* @property {string} type        Nombre del tipo de error
* @property {number} severity_id ID del nivel de severidad       
* @property {string} severity    Nombre de la severidad
* @property {string} level       Nivel de severidad (“Bajo, “Moderado", etc.)
*/

/**
 * Devuelve la información de tipo de error según nombre de severidad
 * 
 * @async
 * @function listTypesBySeverity
 * @param {string} severity 
 * @returns {Promise<import('pg').QueryResult<TypeRow>>}
 */
export const listTypesBySeverity = (severity) => pool.query(`
    SELECT
        types.id,
        types.severity_id,
        types.name AS type,
        severities.name AS severity,
        severities.level AS level
    FROM types
    JOIN severities ON types.severity_id = severities.id
    WHERE severities.name = $1
    `, [severity]);

/**
* @typedef {Object} TypeRow
* @property {number} id
* @property {number} severity_id
* @property {string} type
* @property {string} severity
* @property {string} level
*/
