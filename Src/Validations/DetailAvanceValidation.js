const Joi = require('joi');

const findIdDetailAvanceSchema = Joi.object({
  id_detailAvance: Joi.number().integer().required(),
});

const findNumeroAvanceSchema = Joi.object({
  Numero_avance: Joi.string().required()
});

const createDetailAvanceSchema = Joi.object({
  mode_reglement: Joi.string().required(),
  montant: Joi.number().required(),
  Numero_avance: Joi.string().required(),
  banque: Joi.string().required()
});

module.exports = {
  findIdDetailAvanceSchema,
  createDetailAvanceSchema,
  findNumeroAvanceSchema
};