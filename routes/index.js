const express = require("express").Router;
const router = express();
const routerAdmin = require("./Admin");
const routerCustomer = require("./Customer");

router.use("/customer", routerCustomer);
router.use("/admin", routerAdmin);

module.exports = router;
