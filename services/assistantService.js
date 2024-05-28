const Assistant = require('../models/assistant');

async function createAssistant(assistantData) {
  const assistant = await Assistant.create(assistantData);
  return assistant;
}

async function getAllAssistants() {
  const assistants = await Assistant.findAll();
  return assistants;
}

async function getAssistantById(id) {
  const assistant = await Assistant.findByPk(id);
  return assistant;
}

async function updateAssistant(id, assistantData) {
  const assistant = await Assistant.findByPk(id);
  if (assistant) {
    await assistant.update(assistantData);
    return assistant;
  }
  return null;
}

async function deleteAssistant(id) {
  const assistant = await Assistant.findByPk(id);
  if (assistant) {
    await assistant.destroy();
    return true;
  }
  return false;
}

async function searchAssistantsByName(name) {
  const assistants = await Assistant.findAll({
    where: {
      nome_assistente: name
    }
  });
  return assistants;
}

module.exports = {
  createAssistant,
  getAllAssistants,
  getAssistantById,
  updateAssistant,
  deleteAssistant,
  searchAssistantsByName
};
