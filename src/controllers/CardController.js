const Card = require('../models/Card');

exports.create = async (req, res) => {
  try {
    console.log('Dados da requisição:', req.body);
    const card = new Card(req.body);
    const savedCard = await card.save();
    console.log('Card criado:', savedCard);
    res.status(201).json(savedCard);
  } catch (error) {
    console.error('Erro ao criar card:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card não encontrado' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!card) {
      return res.status(404).json({ message: 'Card não encontrado' });
    }
    res.json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card não encontrado' });
    }
    res.json({ message: 'Card deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};