const { Diet } = require('../db.js');
const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env


const URL = "https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=";
const KEY = API_KEY;
const urlAll = `${URL}${KEY}`

const getApiDiets = async () => {
    try {
      const results = (await axios.get(urlAll)).data.results
      
      const dietsData = results.flatMap((recipe) => recipe.diets);
      
      // formateamos la data para que no se repitan las dietas
      const setDiets = [...new Set(dietsData)];
     
     
      
      
      // manera bulkCreate 
      const transformedData = setDiets.map((diet) => ({
        name: diet,
      }));
      
      
     // manera create individidual
      const createDiet = setDiets.map((diet) => 
         Diet.create({
          name: diet
        })
      )

      const promise = Promise.all(createDiet)
     
      
      return promise
      
      
    // bulkcreate
     const response = await Diet.bulkCreate(transformedData);
     return response;
     
    } catch (error) {
      console.error("Error obteniendo las dietas de la API:", error);
      throw error;
    }
  };



 

 
  
  module.exports = {
    getApiDiets,
  };






