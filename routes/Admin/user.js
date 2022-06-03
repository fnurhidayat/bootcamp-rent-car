const express = require('express').Router
const router = express()
const UserController = require('../../controllers/Admin/user')

/**
 * @swagger
 * /admin/auth/register:
 *  post:
 *   description: Add a New Car
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         description: Name of car
 *         example: admin@mail.com
 *        password:
 *         type: string
 *         description: capacity of car
 *         example: 123456
 *        role:
 *         description: admin or customer
 *         example: admin
 *   responses:
 *    201:
 *     description: success
 *    400:
 *     description: Email Already Exists.
 */
router.post('/register', UserController.register)

/**
 * @swagger
 * /admin/auth/login:
 *  post:
 *   description: Add a New Car
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *         description: Name of car
 *         example: admin@mail.com
 *        password:
 *         type: string
 *         description: capacity of car
 *         example: 123456
 *   responses:
 *    201:
 *     description: success
 *    404:
 *     description: Email Not Found.
 *    400:
 *     description: Password was Wrong.
 */
router.post('/login', UserController.login)

module.exports = router