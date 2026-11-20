const banco = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Substitua 'livraria' pelo nome do seu banco de dados local no MongoDB
banco.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch((erro) => console.error('Erro ao conectar ao MongoDB:', erro));

module.exports = banco;
