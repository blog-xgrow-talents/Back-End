const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O nome é obrigatório'],
  },
  email: {
    type: String,
    required: [true, 'O email é obrigatório'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A senha é obrigatória'],
  },
  role: { 
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);