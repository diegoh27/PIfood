const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Diet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
        type: DataTypes.ENUM(
            'gluten free',
            'ketogenic',
            'dairy free',
            'vegan',
            'lacto ovo vegetarian',
            'pescatarian',
            'paleolithic',
            'fodmap friendly',
            'primal',
            'paleo',
            'whole 30'
        ),
        allowNull: false,
    },

  }, {freezeTableName: true, timestamps: false});
};