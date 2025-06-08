import { pool } from "#database/config.js";

export const createTypes = () => pool.query(`
    INSERT INTO types (severity_id, name)
    VALUES (1, 'Carga lenta'), (2, 'Carga errónea'), (3, 'No filtra'), (3, 'Error de edición'), (4, 'Caída de cliente'), (4, 'Caída de servidor');
    `);