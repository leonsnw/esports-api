const playerService = require('../services/playerService');

const createPlayer = async (req, res) => {
  const player = await playerService.createPlayer(req.body);
  res.status(201).json(player);
};

const getAllPlayers = async (req, res) => {
  const players = await playerService.getAllPlayers();
  res.status(200).json(players);
};

const getPlayerById = async (req, res) => {
  const player = await playerService.getPlayerById(req.params.id);
  if (player) {
    res.status(200).json(player);
  } else {
    res.status(404).json({ message: 'Player not found' });
  }
};

const updatePlayer = async (req, res) => {
  const player = await playerService.updatePlayer(req.params.id, req.body);
  res.status(200).json(player);
};

const deletePlayer = async (req, res) => {
  await playerService.deletePlayer(req.params.id);
  res.status(204).send();
};

const searchPlayersByName = async (req, res) => {
  const players = await playerService.searchPlayersByName(req.query.name);
  res.status(200).json(players);
};

module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
  searchPlayersByName,
};
