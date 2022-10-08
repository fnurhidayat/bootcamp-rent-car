const express = require("express").Router;
const router = express();
const OrderControllerV2 = require("../../../controllers/Admin/v2/order");

/**
 * @swagger
 * /admin/v2/order:
 *  get:
 *   description: List Orders
 *   tags:
 *   - Admin
 *   parameters:
 *    - in: header
 *      name: access_token
 *      required: true
 *      schema:
 *       type: string
 *      description: The access_token from login
 *    - in: query
 *      name: sort
 *      schema:
 *        type: string
 *        example: createdAt:desc
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
