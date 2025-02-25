const { DataTypes } = require("sequelize");
const db = require("../conx/db");

const Contrat = db.define("Contrat", {
    ID_contrat: { 
        type: DataTypes.BIGINT.UNSIGNED, 
        autoIncrement: true, 
        primaryKey: true 
    },
    Numero_contrat: { 
        type: DataTypes.STRING(255), 
        allowNull: false, 
        unique: true 
    },
    Date_debut: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },
    Heure_debut: { 
        type: DataTypes.STRING(8), 
        allowNull: false 
    },
    Date_retour: { 
        type: DataTypes.DATEONLY, 
        allowNull: false 
    },
    Heure_retour: { 
        type: DataTypes.STRING(8), 
        allowNull: false 
    },
    Duree_location: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    Prolongation: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    num_immatriculation: { 
        type: DataTypes.STRING(20), 
        allowNull: false 
    },
    cin: { 
        type: DataTypes.STRING(8), 
        allowNull: false, 
        unique: true // Assurez-vous que le cin est unique
    },
    Prix_total: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    },
    Piece_garantie: { 
        type: DataTypes.STRING(255), 
        allowNull: true 
    },
    Frais: { 
        type: DataTypes.DECIMAL(10, 2), 
        defaultValue: 0.00 
    }
}, {
    tableName: "contrat",
    timestamps: false,
    freezeTableName: true
});

module.exports = Contrat;