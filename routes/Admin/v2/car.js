const express = require("express").Router;
const router = express();
const CarControllerV2 = require("../../../controllers/Admin/v2/car");

/**
 * @swagger
 * /admin/v2/car:
 *   get:
 *     description: List cars
 *     tags:
 *     - Customer
 *     parameters:
 *     - in: query
 *       name: name
 *       schema:
 *         type: string
 *         example: Innova
 *     - in: query
 *       name: category
 *       schema:
 *         type: string
 *         enum:
 *         - small
 *         - medium
 *         - large
 *     - in: query
 *       name: isRented
 *       schema:
 *         type: boolean
 *     - in: query
 *       name: minPrice
 *       schema:
 *         type: number
 *         format: uint32
 *     - in: query
 *       name: maxPrice
 *       schema:
 *         type: number
 *         format: uint32
 *     - in: query
 *       name: page
 *       schema:
 *         type: number
 *         format: int32
 *         example: 1
 *     - in: query
 *       name: pageSize
 *       schema:
 *         type: number
 *         format: int32
 *         example: 10
 *     responses:
 *       200:
 *         description: success
 */
router.get("/", CarControllerV2.getCars);

module.exports = router;
