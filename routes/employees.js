const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { all, add } = require("../controllers/employees");

/* api/employees/ */
router.get("/", auth, all);

/* api/employees/add */
router.post("/add", auth, add);

// /* api/employees/:id */
// router.get("/:id", single);

// /* api/employees/edit */
// router.put("/edit/:id", edit);

// /* api/employees/remove/:id */
// router.delete("/remove/:id", remove);

module.exports = router;
