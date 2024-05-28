const jogadorService = require('../services/jogadorService');

const criarJogador = async (req, res) => {
  const jogador = await jogadorService.criarJogador(req.body);
  res.status(201).json(jogador);
};

const listarJogadores = async (req, res) => {
  const jogadores = await jogadorService.listarJogadores();
  res.status(200).json(jogadores);
};

const obterJogadorPorId = async (req, res) => {
  const jogador = await jogadorService.obterJogadorPorId(req.params.id);
  if (jogador) {
    res.status(200).json(jogador);
  } else {
    res.status(404).json({ message: 'Jogador não encontrado' });
  }
};

const editarJogador = async (req, res) => {
  const jogador = await jogadorService.editarJogador(req.params.id, req.body);
  res.status(200).json(jogador);editarJogador
};

const deletarJogador = async (req, res) => {
  await jogadorService.deletarJogador(req.params.id);
  res.status(204).send();
};

const procurarJogadorPorNome = async (req, res) => {
  const jogadores = await jogadorService.procurarJogadorPorNome(req.query.name);
  res.status(200).json(jogadores);
};

module.exports = {
  criarJogador,
  listarJogadores,
  obterJogadorPorId,
  editarJogador,
  deletarJogador,
  procurarJogadorPorNome
};
