import express from "express";
import { insertLogsController, listLogsController } from "#server/controllers/logs.controller.js";

const router = express.Router();

router.get("/", listLogsController);

router.post("/", insertLogsController);

export default router;