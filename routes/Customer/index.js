const express = require('express').Router
const router = express()
const routerUser = require('./user')
const routerOrder = require('./order')
const authentication = require('../../middlewares/authentication')

router.use('/auth', routerUser)
router.use('/order', authentication.clientAuth, routerOrder)

module.exports = router

/**
 * @swagger
 * /customer/auth/register:
 *  post:
 *   description: Add a New User
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
 * /customer/auth/login:
 *  post:
 *   description: login user
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
