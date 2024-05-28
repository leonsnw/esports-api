const express = require('express');
const playerController = require('../controllers/playerController');
const router = express.Router();

router.post('/players/criar', playerController.createPlayer);
router.get('/players/listar', playerController.getAllPlayers);
router.get('/players/buscar/:id', playerController.getPlayerById);
router.put('/players/editar/:id', playerController.updatePlayer);
router.delete('/players/deletar/:id', playerController.deletePlayer);
router.get('/players/search', playerController.searchPlayersByName);

module.exports = router;
