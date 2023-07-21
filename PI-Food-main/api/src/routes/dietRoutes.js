const { Router } = require('express');
const { getDietsHandler, postDietHandler } = require('../handlers/dietsHandlers.js')

const dietRoutes = Router();

dietRoutes.get('/', getDietsHandler)
dietRoutes.post('/', postDietHandler)


module.exports = dietRoutes;