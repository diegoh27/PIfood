const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recetasRoutes = require('./recetasRoutes.js')
const dietRoutes = require('./dietRoutes.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recetasRoutes);
router.use('/diets', dietRoutes);


module.exports = router;
