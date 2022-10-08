const express = require("express").Router;
const router = express();
const OrderController = require("../../controllers/Admin/order");

/**
 * @swagger
 * /admin/order:
 *  get:
 *   description: Fetch All orders
 *   tags:
 *   - Admin
 *   responses:
 *    200:
 *     description: success
 */
router.get("/", OrderController.getOrders);

/**
 * @swagger
 * /admin/order/{id}:
 *  get:
 *   description: Fetch Order By Id
 *   tags:
 *   - Admin
 *   parameters:
 *    - in: path
 *      name: id   # Note the name is the same as in the path
 *      required: true
 *      schema:
 *        type: integer
 *        description: The car ID
 *   responses:
 *    200:
 *     description: success
 */
router.get("/:id", OrderController.getOrderById);

/**
 * @swagger
 * /admin/order/{id}:
 *  patch:
 *   description: Change status Order
 *   tags:
 *   - Admin
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *        description: The car ID
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        status:
 *         type: integer
 *         description: 0 or 1
 *         example: 1
 *   responses:
 *    200:
 *     description: success update order
 *    404:
 *     description: Not Found Order
 */
router.patch("/:id", OrderController.changeStatus);

/**
 * @swagger
 * /admin/order/{id}:
 *  delete:
 *   description: Delete Order
 *   tags:
 *   - Admin
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *        description: The car ID
 *   responses:
 *    201:
 *     description: success delete order
 *    404:
 *     description: Not Found Order
 */
router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
