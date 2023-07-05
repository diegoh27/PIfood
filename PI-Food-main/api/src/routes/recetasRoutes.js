const { Router } = require("express");
const {  getRecipeByIdHandler,
    getRecipesByNameHandler,
    postRecipeHandler } = require('../handlers/recipeHandler.js')

const recetasRoutes = Router();



recetasRoutes.get('/:idRecipe',getRecipeByIdHandler);

recetasRoutes.get('/', getRecipesByNameHandler);

recetasRoutes.post('/', postRecipeHandler);




module.exports = recetasRoutes;
