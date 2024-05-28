
const assinanteService = require('../services/assinanteService');

async function criarAssinante (req, res) {
  try {
    const assinante = await assinanteService.criarAssinante (req.body);
    res.status(201).json(assinante);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar assinante', error });
  }
}

async function listarAssinantes(req, res) {
  try {
    const assinantes = await assinanteService.listarAssinantes();
    res.status(200).json(assinantes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar assinantes', error });
  }
}

async function getAssinantesPorId(req, res) {
  try {
    const assinante = await assinanteService.getAssinantesPorId(req.params.id);
    if (assinante) {
      res.status(200).json(assinante);
    } else {
      res.status(404).json({ message: 'Assinante não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter assinante', error });
  }
}

async function editarAssinante(req, res) {
  try {
    const assinante = await assinanteService.editarAssinante(req.params.id, req.body);
    if (assinante) {
      res.status(200).json(assinante);
    } else {
      res.status(404).json({ message: 'Assinante não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao editar assinante', error });
  }
}

async function deletarAssinante(req, res) {
  try {
    const success = await assinanteService.deletarAssinante(req.params.id);
    if (success) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Assinante não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar assinante', error });
  }
}

async function pesquisarAssinantePorNome(req, res) {
  try {
    const assinante = await assinanteService.pesquisarAssinantePorNome(req.query.name);
    res.status(200).json(assinante);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao procurar assinante', error });
  }
}

module.exports = {
  criarAssinante,
  listarAssinantes,
  getAssinantesPorId,
  editarAssinante,
  deletarAssinante,
  pesquisarAssinantePorNome
};
