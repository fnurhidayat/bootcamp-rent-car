const express = require('express').Router
const router = express()
const OrderController = require('../../controllers/Customer/order')
const authentication = require('../../middlewares/authentication')

/**
 * @swagger
 * /customer/order:
 *  post:
 *   description: Add a New Order
 *   parameters:
 *    - in: header
 *      name: access_token
 *      required: true
 *      schema:
 *       type: string
 *      description: The access_token from login
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        start_rent_at: 
 *         type: string
 *         description: start date YYYY-MM-DD
 *         example: 2022-10-05
 *        finish_rent_at:
 *         type: string
 *         description: finish date YYYY-MM-DD
 *         example: 2022-10-12
 *        car_id:
 *         type: integer
 *         example: 1
 *   responses:
 *    201:
 *     description: success
 */
router.post('/', OrderController.addOrder)

/**
 * @swagger
 * /customer/order:
 *  get:
 *   description: Fetch All orders
 *   parameters:
 *    - in: header
 *      name: access_token
 *      required: true
 *      schema:
 *       type: string
 *      description: The access_token from login
 *   responses:
 *    200:
 *     description: success
 */
router.get('/', OrderController.getOrders)

/**
 * @swagger
 * /customer/order/{id}:
 *  get:
 *   description: Fetch Order By Id
 *   parameters:
 *    - in: header
 *      name: access_token
 *      required: true
 *      schema:
 *       type: string
 *      description: The access_token from login
 *    - in: path
 *      name: id   # Note the name is the same as in the path
 *      required: true
 *      schema:
 *        type: integer
 *        description: The Order ID
 *   responses:
 *    200:
 *     description: success
 */
router.get('/:id', OrderController.getOrderById)

/**
 * @swagger
 * /customer/order/{id}:
 *  put:
 *   description: Add a New Order
 *   parameters:
 *    - in: header
 *      name: access_token
 *      required: true
 *      schema:
 *       type: string
 *      description: The access_token from login
 *    - in: path
 *      name: id   # Note the name is the same as in the path
 *      required: true
 *      schema:
 *        type: integer
 *        description: The Order ID
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        start_rent_at: 
 *         type: string
 *         description: start date YYYY-MM-DD
 *         example: 2022-10-05
 *        finish_rent_at:
 *         type: string
 *         description: finish date YYYY-MM-DD
 *         example: 2022-10-12
 *        car_id:
 *         type: integer
 *         example: 1
 *   responses:
 *    201:
 *     description: success
 */
router.put('/:id', OrderController.updateOrder)
/**
 * @swagger
 * /customer/order/{id}:
 *  delete:
 *   description: Delete Order
 *   parameters:
 *    - in: header
 *      name: access_token
 *      required: true
 *      schema:
 *       type: string
 *      description: The access_token from login
 *    - in: path
 *      name: id   # Note the name is the same as in the path
 *      required: true
 *      schema:
 *        type: integer
 *        description: The Order ID
 *   responses:
 *    201:
 *     description: success delete order
 *    404:
 *     description: Not Found Order
 */
router.delete('/:id', OrderController.deleteOrder)

module.exports = router