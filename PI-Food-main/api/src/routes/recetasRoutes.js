const { Router } = require("express");
const {  getRecipeByIdHandler,
    getRecipesByNameHandler,
    postRecipeHandler, deleteRecipeDb } = require('../handlers/recipeHandler.js')

const recetasRoutes = Router();



recetasRoutes.get('/:idRecipe',getRecipeByIdHandler);

recetasRoutes.get('/', getRecipesByNameHandler);

recetasRoutes.post('/', postRecipeHandler);

recetasRoutes.delete('/:idRecipe',deleteRecipeDb)




module.exports = recetasRoutes;
