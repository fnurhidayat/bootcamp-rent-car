const express = require('express').Router
const router = express()
const CarController = require('../../controllers/Admin/car')

/**
 * @swagger
 * /admin/car:
 *  post:
 *   description: Add a New Car
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: Name of car
 *         example: Innova
 *        category:
 *         type: string
 *         description: capacity of car
 *         example: small
 *        price:
 *         type: integer
 *         example: 5000000
 *         description: price per day
 *        status:
 *         type: boolean
 *         description: The car is renting or not
 *         example: false
 *        image:
 *         type: string
 *         format: binary
 *         description: link for image
 *         example: innova.pn
 *   responses:
 *    201:
 *     description: success
 */
router.post('/', CarController.addCarr)
/**
 * @swagger
 * /admin/car:
 *  get:
 *   description: Fetch All Cars
 *   responses:
 *    200:
 *     description: success
 */
router.get('/', CarController.getCars)
/**
 * @swagger
 * /admin/car/{id}:
 *  get:
 *   description: Fetch Car By Id
 *   parameters:
 *    - in: path
 *      name: id  
 *      required: true
 *      schema:
 *       type: integer
 *      description: The car ID
 *   responses:
 *    200:
 *     description: success
 */
router.get('/:id', CarController.getCarById)
/**
 * @swagger
 * /admin/car/{id}:
 *  put:
 *   description: Update Car By Id
 *   parameters:
 *    - in: path
 *      name: id  
 *      required: true
 *      schema:
 *       type: integer
 *      description: The car ID
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         description: Name of car
 *         example: Innova
 *        category:
 *         type: string
 *         description: capacity of car
 *         example: small
 *        price:
 *         type: integer
 *         example: 5000000
 *         description: price per day
 *        status:
 *         type: boolean
 *         description: The car is renting or not
 *         example: false
 *        image:
 *         type: string
 *         format: binary
 *         description: The car is renting or not
 *         example: innova.png
 *   responses:
 *    200:
 *     description: success
 *    404:
 *     description: Not Found Car
 */
router.put('/:id', CarController.editCar)
/**
 * @swagger
 * /admin/car/{id}:
 *  delete:
 *   description: Delete Car By Id
 *   parameters:
 *    - in: path
 *      name: id   # Note the name is the same as in the path
 *      required: true
 *      schema:
 *        type: integer
 *        description: The car ID
 *   responses:
 *    200:
 *     description: success delete car
 *    404:
 *     description: Not Found Car
 */
router.delete('/:id', CarController.deleteCar)

module.exports = router