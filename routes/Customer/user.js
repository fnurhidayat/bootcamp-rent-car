const express = require("express").Router;
const router = express();
const UserController = require("../../controllers/Customer/userController");

/**
 * @swagger
 * /customer/auth/register:
 *  post:
 *   description: Add a New User
 *   tags:
 *   - Customer
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         description: Name of email
 *         example: admin@mail.com
 *        password:
 *         type: string
 *         description: password min 6 char
 *         example: 123456
 *   responses:
 *    201:
 *     description: success
 *    400:
 *     description: Email Already Exists.
 */
router.post("/register", UserController.register);

/**
 * @swagger
 * /customer/auth/login:
 *  post:
 *   description: login user
 *   tags:
 *   - Customer
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         description: email
 *         example: admin@mail.com
 *        password:
 *         type: string
 *         description: min 6 char
 *         example: 123456
 *   responses:
 *    201:
 *     description: success
 *    404:
 *     description: Email Not Found.
 *    400:
 *     description: Password was Wrong.
 */
router.post("/login", UserController.login);

module.exports = router;
