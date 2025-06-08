import { pool } from "#database/config.js";

export const createSeverities = () => pool.query(`
    INSERT INTO severities (level, name)
    VALUES (2, 'Moderado'), (3, 'Alto'), (4, 'Crítico');
    `);