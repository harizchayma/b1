const joi = require("joi");

const createContratSchema = joi.object({
  Date_debut: joi.date().required(),
  Heure_debut: joi.string().pattern(/^\d{2}:\d{2}(:\d{2})?$/).required(),
  Date_retour: joi.date().greater(joi.ref('Date_debut')).required(),
  Heure_retour: joi.string().pattern(/^\d{2}:\d{2}(:\d{2})?$/).required(),
  Duree_location: joi.number().integer().positive().required(),
  Prolongation: joi.date().allow(null),
  Numero_contrat: joi.string().required(),
  num_immatriculation: joi.string().required(), // Changer en string si c'est un varchar
  cin: joi.string().required(), // Changer en string si c'est un varchar
  Prix_total: joi.number().precision(2).required(),
  Piece_garantie: joi.string().allow(null, ''),
  Frais: joi.number().precision(2).default(0.00),
}).unknown(true);

const findIdContratSchema = joi.object({
  ID_contrat: joi.number().integer().required()
});

// Export schemas
module.exports = {
  createContratSchema,
  findIdContratSchema
};