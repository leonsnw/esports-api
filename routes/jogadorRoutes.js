const express = require('express');
const jogadorControler = require('../controllers/jogadorControler');
const router = express.Router();

router.post('/jogador/criar', jogadorControler.criarJogador);
router.get('/jogador/listar', jogadorControler.listarJogadores);
router.get('/jogador/buscar/:id', jogadorControler.obterJogadorPorId);
router.put('/jogador/editar/:id', jogadorControler.editarJogador);
router.delete('/jogador/deletar/:id', jogadorControler.deletarJogador);
router.get('/jogador/search', jogadorControler.procurarJogadorPorNome);

module.exports = router;
