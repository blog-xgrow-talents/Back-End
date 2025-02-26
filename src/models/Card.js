const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  lancamentos: { type: Number, required: true },
  faturamento: { type: Number, required: true },
  instagram: { type: String, required: true },
  whatsapp: { type: String, required: true },
  tipo: { type: String, enum: ['lançador', 'especialista'], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
});

module.exports = mongoose.model('Card', CardSchema);
