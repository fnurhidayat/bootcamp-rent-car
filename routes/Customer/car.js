const express = require("express").Router;
const router = express();
const CarController = require("../../controllers/Customer/car");

/**
 * @swagger
 * /customer/car:
 *   get:
 *     operationId: customerListCars
 *     description: List cars
 *     summary: List cars
 *     tags:
 *       - Customer / Car
 *     responses:
 *       200:
 *         description: Car listed
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Car"
 */
router.get("/", CarController.getCars);

/**
 * @swagger
 * /customer/car/{id}:
 *   get:
 *     operationId: customerGetCar
 *     description: Get car
 *     summary: Get car
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *           format: int32
 *           example: 1
 *     tags:
 *       - Customer / Car
 *     responses:
 *       200:
 *         description: Get car
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Car"
 */
router.get("/:id", CarController.getCarById);

module.exports = router;
