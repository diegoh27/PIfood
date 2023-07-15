const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pricePerServing: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    readyInMinutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    db: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }

  }, {freezeTableName: true, timestamps: false});
};
