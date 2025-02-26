const mongoose = require('mongoose');

const MatchProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cidade: { type: String, required: true }, 
  estado: { type: String, required: true },
  launches: { type: String, enum: ['Sim', 'Não'], required: true }, 
  revenue: { type: Number }, 
  instagram: { type: String },
  whatsapp: { type: String, required: true },
  tipo: { type: String, enum: ['Lançador', 'Especialista'], required: true }, 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MatchProfile', MatchProfileSchema);