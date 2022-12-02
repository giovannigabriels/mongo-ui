const express = require("express");
const Controller = require("../controllers/userController");

const router = express.Router();

router.get("/", Controller.findAll);
router.get("/:id", Controller.findOne);
router.put("/:id", Controller.edit);

module.exports = router;
