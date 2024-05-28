const Player = require('../models/player');

async function createPlayer(playerData) {
  const player = await Player.create(playerData);
  return player;
}

async function getAllPlayers() {
  const players = await Player.findAll();
  return players;
}

async function getPlayerById(id) {
  const player = await Player.findByPk(id);
  return player;
}

async function updatePlayer(id, playerData) {
  const player = await Player.findByPk(id);
  if (player) {
    await player.update(playerData);
    return player;
  }
  return null;
}

async function deletePlayer(id) {
  const player = await Player.findByPk(id);
  if (player) {
    await player.destroy();
    return true;
  }
  return false;
}

async function searchPlayersByName(name) {
  const players = await Player.findAll({
    where: {
      nome_jogador: name
    }
  });
  return players;
}

module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
  searchPlayersByName
};
