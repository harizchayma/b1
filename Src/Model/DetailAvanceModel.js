const { DataTypes } = require("sequelize");
const db = require("../conx/db");

const DetailAvance = db.define("DetailAvance", {
    id_detailAvance: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    mode_reglement: { // Renommé pour correspondre à la colonne de la base de données
        type: DataTypes.STRING,
        allowNull: true // Optionnel selon votre définition
    },
    montant: { // Ajout de la colonne montant
        type: DataTypes.DECIMAL(10, 2), // Type décimal avec 2 décimales
        allowNull: false // Requis
    },
    banque: { 
        type: DataTypes.STRING,
        allowNull: true // Optionnel selon votre définition
    },
    Numero_avance: { // Ajout de la colonne Numero_avance
        type: DataTypes.STRING,
        allowNull: false, // Requis
        references: {
            model: 'avance', // Nom de la table référencée
            key: 'Numero_avance' // Clé de la table référencée
        }
    }
}, {
    tableName: "detailavance", // Nom de la table dans la base de données
    timestamps: false, // Pas de colonnes createdAt et updatedAt
    freezeTableName: true // Empêche Sequelize de pluraliser le nom de la table
});

module.exports = DetailAvance;