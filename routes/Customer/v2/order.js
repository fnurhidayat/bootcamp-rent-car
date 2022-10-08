const express = require("express").Router;
const router = express();
const OrderControllerV2 = require("../../../controllers/Customer/v2/order");

/**
 * @swagger
 * /customer/v2/order:
 *  get:
 *   description: List Orders
 *   tags:
 *   - Customer
 *   parameters:
 *    - in: header
 *      name: access_token
 *      required: true
 *      schema:
 *       type: string
 *      description: The access_token from login
 *    - in: query
 *      name: page
 *      schema:
 *        type: number
 *        format: int32
 *        example: 1
 *    - in: query
 *      name: pageSize
 *      schema:
 *        type: number
 *        format: int32
 *        example: 10
 *   responses:
 *    200:
 *     description: success
 */
router.get("/", OrderControllerV2.getOrders);

module.exports = router;
