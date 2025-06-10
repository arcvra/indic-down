import logs from "#server/routes/logs.js";
import types from "#server/routes/types.js";

export default (app) => {
    app.use("/logs", logs);
    app.use("/types", types);
};