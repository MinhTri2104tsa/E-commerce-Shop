const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/', UserController.createUser);

const routes = (app) => {
    app.use('/api/user', router);
};

module.exports = routes;
