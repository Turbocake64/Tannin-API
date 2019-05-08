const router = require("express").Router();
const addEmployController = require("../../controllers/addEmployController");

//defining our root route or "/"
router.route("/")
.post(addEmployController.addEmployee)

// .delete(addEmployController.removeEmployee);

module.exports = router;