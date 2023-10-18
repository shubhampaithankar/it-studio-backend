const express = require('express')
const router = express.Router()
const dataController = require('../controller/dataController')

router.get('/get-all', dataController.getData)
router.post('/create', dataController.createData)
router.post('/update', dataController.updateData)
router.post('/delete', dataController.deleteData)

module.exports = router
