const express = require('express');
const assinanteControler = require('../controllers/assinanteControler');

const router = express.Router();

router.post('/assinante/criar', assinanteControler.criarAssinante);
router.get('/assinante/listar', assinanteControler.listarAssinantes);
router.get('/assinante/buscar/:id', assinanteControler.getAssinantesPorId);
router.put('/assinante/editar/:id', assinanteControler.editarAssinante);
router.delete('/assinante/deletar/:id', assinanteControler.deletarAssinante);
router.get('/assinante/search', assinanteControler.pesquisarAssinantePorNome);

module.exports = router;
