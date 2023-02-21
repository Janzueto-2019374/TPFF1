//Importaciones
const { Router } = require('express');
const { deleteProducto, putProducto, postProducto, getProductos } = require('../controllers/producto');

const router = Router();


router.get('/mostrar', getProductos);

router.post('/agregar', postProducto);

router.put('/editar/:id', putProducto);

router.delete('/eliminar/:id', deleteProducto);


module.exports = router;


// ROUTES