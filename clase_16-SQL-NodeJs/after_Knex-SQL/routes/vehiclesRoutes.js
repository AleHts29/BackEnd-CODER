const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehiclesControllers");

router.post("/", controller.createItem);
router.get("/all", controller.list);
router.get("/:id", controller.single);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

module.exports = router;
