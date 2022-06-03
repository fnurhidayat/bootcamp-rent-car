const express = require('express').Router
const router = express()
const UserController = require('../../controllers/Customer/userController')


router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router