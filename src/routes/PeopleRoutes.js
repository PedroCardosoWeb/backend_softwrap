const express = require('express')
const router = express.Router()

const PeopleController = require('../controller/PeopleController')
const PeopleValidation = require('../middleware/PeopleValidation')

router.post('/', PeopleValidation, PeopleController.create)
router.get('/', PeopleController.all)

module.exports = router;