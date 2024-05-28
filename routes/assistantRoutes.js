const express = require('express');
const assistantController = require('../controllers/assistantController');

const router = express.Router();

router.post('/assistants/criar', assistantController.createAssistant);
router.get('/assistants/listar', assistantController.getAllAssistants);
router.get('/assistants/buscar/:id', assistantController.getAssistantById);
router.put('/assistants/editar/:id', assistantController.updateAssistant);
router.delete('/assistants/deletar/:id', assistantController.deleteAssistant);
router.get('/assistants/search', assistantController.searchAssistantsByName);

module.exports = router;
