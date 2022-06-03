const express = require('express').Router
const router = express()
const routerUser = require('./user')
const routerCar = require('./car')
const routerOrder = require('./order')


router.use('/auth', routerUser)
router.use('/car', routerCar)
router.use('/order', routerOrder)

module.exports = router
