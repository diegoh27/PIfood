const { Diet } = require('../db.js');
const { getApiDiets } = require('../controllers/dietsControllers.js')



const getDietsHandler = async (req, res) => {
    try {
        const diets = await Diet.findAll();
        if(!diets.length){
            const allDiets = await getApiDiets();
            console.log(allDiets);
            return  res.status(200).json(allDiets)
        }
        const dbDiets = await Diet.findAll();
        
        res.status(200).json(dbDiets)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

const postDietHandler = async (req, res) => {
    const { diet } = req.body 
    try {
        
    } catch (error) {
        
    }
}



module.exports = {
    getDietsHandler, 
    postDietHandler
}