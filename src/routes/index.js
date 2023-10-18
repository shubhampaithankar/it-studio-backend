const dataRoutes = require('./dataRoute')
const emailRoutes = require('./emailRoute')

const express = require('express')
const router = express.Router()

router.use('/data', dataRoutes)
router.use('/email', emailRoutes)

module.exports = router