const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/', UserController.createUser);

const routes = (app) => {
    app.use('/api/user', router);
    app.use('/api/user/sign-up', router);
    app.use('/api/user/sign-in', router);
    app.use('/api/user/update-user', router);
};

module.exports = routes;
