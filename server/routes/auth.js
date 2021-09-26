const { Router } = require('express');
const router = Router();

const AuthController = require('../controller/auth');

router.post('/', AuthController.authenticate_user);

module.exports = router;