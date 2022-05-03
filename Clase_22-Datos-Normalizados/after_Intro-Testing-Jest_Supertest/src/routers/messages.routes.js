import express from "express";
import * as MessageController from "../controllers/messages.controller.js";

const router = express.Router();

router.post("/", MessageController.createMessage);
router.get("/", MessageController.getMessages);
router.put("/:id", MessageController.updateMessages);
router.delete("/:id", MessageController.deleteMessages);

export default router;
