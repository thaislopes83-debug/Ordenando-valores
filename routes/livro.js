const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// GET /: retorna todos os livros em formato JSON
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao obter livros.', erro: erro.message });
  }
});

// POST /: recebe um livro no corpo da requisição (req.body) e o inclui no banco
router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.status(201).json({ sucesso: true, mensagem: 'Livro incluído com sucesso!' });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: 'Erro ao incluir livro.', erro: erro.message });
  }
});

// DELETE /:codigo: extrai o _id de req.params e exclui o livro correspondente
router.delete('/:codigo', async (req, res) => {
  try {
    const codigo = req.params.codigo;
    await excluir(codigo);
    res.json({ sucesso: true, mensagem: 'Livro excluído com sucesso!' });
  } catch (erro) {
    res.status(500).json({ sucesso: false, mensagem: 'Erro ao excluir livro.', erro: erro.message });
  }
});

module.exports = router;
