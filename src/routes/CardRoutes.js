const express = require('express');
const router = express.Router();
const CardController = require('../controllers/CardController');
const verifyToken = require('../utils/verifyToken');

router.post('/', verifyToken, (req, res, next) => {
  console.log('Rota POST /cards acessada');
  next();
}, CardController.create);

router.get('/', CardController.findAll);

router.get('/:id', CardController.findOne);

router.put('/:id', verifyToken, CardController.update);

router.delete('/:id', verifyToken, CardController.delete);

module.exports = router;
