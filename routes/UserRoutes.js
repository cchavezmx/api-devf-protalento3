const express = require('express')
const router = express.Router()
const { User } = require('../models')
const { UserValidator } = require('../validators')
const { UserControllers } = require('../controllers')

// add a note
router.post('/create/newuser', UserValidator.create, UserControllers.create)
router.post('/user/login', UserValidator.login, UserControllers.login)


module.exports = router