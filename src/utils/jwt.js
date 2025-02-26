const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (userId) => {
  const payload = {
    userId,
  };

  const options = {
    expiresIn: process.env.JWT_EXPIRATION || '90d',
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Token inválido ou expirado');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};