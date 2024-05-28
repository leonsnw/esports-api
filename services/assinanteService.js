const Assinante = require('../models/assinante');

async function criarAssinante(assinanteData) {
  const assinante = await Assinante.create(assinanteData);
  return assinante;
}

async function listarAssinantes() {
  const assinantes = await Assinante.findAll();
  return assinantes;
}

async function getAssinantesPorId(id) {
  const assinante = await Assinante.findByPk(id);
  return assinante;
}

async function editarAssinante(id, assinanteData) {
  const assinante = await Assinante.findByPk(id);
  if (assinante) {
    await assinante.update(assinanteData);
    return assinante;
  }
  return null;
}

async function deletarAssinante(id) {
  const assinante = await Assinante.findByPk(id);
  if (assinante) {
    await assinante.destroy();
    return true;
  }
  return false;
}

async function pesquisarAssinantePorNome(name) {
  const assinantes = await Assinante.findAll({
    where: {
      nome_assinante: name
    }
  });
  return assinantes;
}

module.exports = {
  criarAssinante,
  listarAssinantes,
  getAssinantesPorId,
  editarAssinante,
  deletarAssinante,
  pesquisarAssinantePorNome
};