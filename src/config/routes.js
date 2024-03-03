const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
const usersController = require('../controllers/users_controller');

/* GET home page. */
router.get('/', homeController.index);
router.get('/users', usersController.index);

module.exports = router;
