const express = require("express");
const Controller = require("../controllers/userController");

const router = express.Router();

router.get("/", Controller.findAll);

module.exports = router;
