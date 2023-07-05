const { Diet, Recipe } = require('../db.js');
const { Op } = require('sequelize');
const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env




const URL = "https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=";
const KEY = API_KEY;

const urlAll = `${URL}${KEY}`


// controlador para traernos todas las recetas de la api
const getAllRecipeApi = async () => {
        const recipeApi = (await axios.get(urlAll)).data.results
        const newRecipeApi = recipeApi.map(recipe => {
            return { 
                id: recipe.id,
                name: recipe.title,
                image: recipe.image,
                diets: recipe.diets.map((d)=> {return{name:d}}),
                summary: recipe.summary,
                healthScore: recipe.healthScore,
                diets: recipe.diets,
                steps: recipe.analyzedInstructions[0]?.steps.map(step => {
                    return `paso numero: ${step.number} - ${step.step}`
                })
            }
        })
         return newRecipeApi;
        
}


// controlador para traernos todas las recetas de la db 
const getAllRecipesOnDb = async () => {
    const recipesDb = await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          }
        },
      })
    return recipesDb
} 


// controlador para traernos todas las recetas api y db juntas o buscamos por name
const getAllRecipes = async (name) => {
    const recipesDb = await getAllRecipesOnDb();
    const recipesApi = await getAllRecipeApi();
    const allRecipes = [...recipesApi, ...recipesDb]

    if(name){ 
    const filterRecipes = allRecipes.filter((recipe) => 
    recipe.name.toLowerCase().includes(name.toLowerCase()))
    // verificamos si se hizo match en la busqueda del nombre
        if(!filterRecipes.length) {
            throw new Error("No se encontraron recetas con ese nombre")
        } else {
            return filterRecipes;
        }
    }

    return allRecipes
}

const getRecipeById = async (idRecipe) => {
    if(isNaN(idRecipe)) {
        const findDb = await Recipe.findByPk(idRecipe, {
            include: [{
                model: Diet,
                through: {attributes: []}
            }]
        }) 
        if(findDb){
            return findDb;
        } else {
            throw new Error("No se encontro la receta con ese id")
        }
    }
    const AllrecipesApi = await getAllRecipeApi();
    const findRecipeId = AllrecipesApi.find((recipe) => {
    return recipe.id === Number(idRecipe) });
    
    if(!findRecipeId){
        throw new Error("No se encontro la receta con ese id")
    }

    return findRecipeId;
}

const postRecipe = async ({name, healthScore, image, summary, steps, diets, pricePerServing, readyInMinutes, servings}) => {
    

    const verifyExist = await Recipe.findAll({
        where: { name: name}
    })
        if(verifyExist.length){ 
            throw new Error("Ya existe una receta con ese nombre")
        }
    const newRecipe = await Recipe.create({
        name: name,
        pricePerServing: pricePerServing,
        healthScore: healthScore, 
        image: image, 
        summary: summary, 
        readyInMinutes: readyInMinutes,
        servings: servings,
        steps: steps
    });
    await newRecipe.addDiet(diets)
    
    
    
    return newRecipe;
} 









module.exports = {
    getAllRecipeApi, 
    postRecipe,
    getAllRecipesOnDb,
    getAllRecipes, 
    getRecipeById
}