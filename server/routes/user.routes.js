const router = require("express").Router();
const { CREATE_USER } = require("../controllers/user.controller");

router.post("/create", CREATE_USER);

module.exports = router;
