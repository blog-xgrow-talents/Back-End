const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, isAdmin } = require('../middleware/middleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.get('/', authenticate, isAdmin, userController.getUsers);

router.put('/:id', authenticate, userController.updateUser);

router.delete('/:id', authenticate, isAdmin, userController.deleteUser);

module.exports = router;
