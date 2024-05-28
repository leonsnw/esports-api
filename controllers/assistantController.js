
const assistantService = require('../services/assistantService');

async function createAssistant(req, res) {
  try {
    const assistant = await assistantService.createAssistant(req.body);
    res.status(201).json(assistant);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create assistant', error });
  }
}

async function getAllAssistants(req, res) {
  try {
    const assistants = await assistantService.getAllAssistants();
    res.status(200).json(assistants);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get assistants', error });
  }
}

async function getAssistantById(req, res) {
  try {
    const assistant = await assistantService.getAssistantById(req.params.id);
    if (assistant) {
      res.status(200).json(assistant);
    } else {
      res.status(404).json({ message: 'Assistant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get assistant', error });
  }
}

async function updateAssistant(req, res) {
  try {
    const assistant = await assistantService.updateAssistant(req.params.id, req.body);
    if (assistant) {
      res.status(200).json(assistant);
    } else {
      res.status(404).json({ message: 'Assistant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update assistant', error });
  }
}

async function deleteAssistant(req, res) {
  try {
    const success = await assistantService.deleteAssistant(req.params.id);
    if (success) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Assistant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete assistant', error });
  }
}

async function searchAssistantsByName(req, res) {
  try {
    const assistants = await assistantService.searchAssistantsByName(req.query.name);
    res.status(200).json(assistants);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search assistants', error });
  }
}

module.exports = {
  createAssistant,
  getAllAssistants,
  getAssistantById,
  updateAssistant,
  deleteAssistant,
  searchAssistantsByName
};
