const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { all } = require("../controllers/employees");

/* api/employees/ */
router.get("/", auth, all);

// /* api/employees/:id */
// router.get("/:id", single);

// /* api/employees/add */
// router.post("/add", add);

// /* api/employees/edit */
// router.put("/edit/:id", edit);

// /* api/employees/remove/:id */
// router.delete("/remove/:id", remove);

module.exports = router;
