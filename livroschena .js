const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  _id: banco.Schema.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

// Associa o schema à coleção 'livros' no banco de dados e exporta o modelo
const Livro = banco.model('livros', LivroSchema);

module.exports = Livro;
