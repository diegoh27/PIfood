const { Router } = require('express');
const { getDietsHandler } = require('../handlers/dietsHandlers.js')

const dietRoutes = Router();

dietRoutes.get('/', getDietsHandler)


module.exports = dietRoutes;