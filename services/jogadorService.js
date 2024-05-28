const Jogador = require('../models/jogador');

async function criarJogador(jogadorData) {
  const jogador = await Jogador.create(jogadorData);
  return jogador;
}

async function listarJogadores() {
  const jogadores = await Jogador.findAll();
  return jogadores;
}

async function obterJogadorPorId(id) {
  const jogadores = await Jogador.findByPk(id);
  return jogadores;
}

async function editarJogador(id, jogadorData) {
  const jogador = await Jogador.findByPk(id);
  if (jogador) {
    await jogador.update(jogadorData);
    return jogador;
  }
  return null;
}

async function deletarJogador(id) {
  const jogador = await Jogador.findByPk(id);
  if (jogador) {
    await jogador.destroy();
    return true;
  }
  return false;
}

async function procurarJogadorPorNome(name) {
  const jogador = await Jogador.findAll({
    where: {
      nome_jogador: name
    }
  });
  return jogador;
}

module.exports = {
  criarJogador,
  listarJogadores,
  obterJogadorPorId,
  editarJogador,
  deletarJogador,
  procurarJogadorPorNome
};
