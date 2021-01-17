const express = require('express');
const router = express.Router();
const libroscontroller = require('../controllers/libroscontroller');
const clientescontroller = require('../controllers/clientescontroller');
const ventascontroller = require('../controllers/ventascontroller');

router.get('/' , (req,res) => {
    res.render('index');
});
router.get('/clientes', clientescontroller.show);
router.get('/libros', libroscontroller.show);
router.get('/index', ventascontroller.show);
router.post('/agregar-libro', libroscontroller.create);
router.post('/agregar-cliente', clientescontroller.create);
//router.post('/agregar-venta', ventascontroller.create);
router.get('/borrar-libro/:id_libro',libroscontroller.delete);
router.get('/borrar-cliente/:id_cliente',clientescontroller.delete);
router.post('/editar-cliente/clientes' ,clientescontroller.update);
router.get('/index/libros/clientes', ventascontroller.list);


module.exports = router;