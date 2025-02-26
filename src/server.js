const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use('/api', routes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});