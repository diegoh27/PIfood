const { postRecipe, getAllRecipes, getRecipeById, deleteRecipeOnDb} = require('../controllers/recipesControllers.js')


const getRecipeByIdHandler = async (req, res) => {
    const { idRecipe } = req.params
    try {
        const response = await getRecipeById(idRecipe)
        return  res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const getRecipesByNameHandler = async (req, res) => {
    const {name} = req.query
    try {
        if(name) {
        const response = await getAllRecipes(name)
        return res.status(200).json(response)
        }

        const response =  await getAllRecipes();
        return res.status(200).json(response);
        
    } catch (error) {
      return  res.status(400).json({error: error.message})

    }
}

const postRecipeHandler = async (req, res) => {
    const { name, healthScore, image, summary, steps, diets, pricePerServing, readyInMinutes} = req.body
      
        
        try {
            if(!name || !healthScore || !image || !summary || !steps || !diets || !pricePerServing || !readyInMinutes ) {
                throw new Error("Se requiren todos los datos")
            }
            const response = await postRecipe({name, healthScore, image, summary, steps, diets, pricePerServing, readyInMinutes})
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
};


const deleteRecipeDb = async (req, res) => {
    const { idRecipe } = req.params 
  
    

try {
    await deleteRecipeOnDb(idRecipe)
    return res.status(200).json({Success:`Your recipe by id: ${idRecipe} has been deleted`})
    
} catch (error) {
    res.status(404).json({error:error.message})
}
}
 

module.exports = {
    getRecipeByIdHandler,
    getRecipesByNameHandler,
    postRecipeHandler, 
    deleteRecipeDb
}