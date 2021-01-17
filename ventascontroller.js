const controller = {};
const { query } = require('express');
const db= require('../database');


controller.show = (req, res) => {
    db.query('SELECT * FROM ventas', (err, ventas) => {
        if (err) {
        res.json(err);
        }
        res.render('index',{
           index:index
        });
    });
    };

/*controller.create =(req,res)=>{
    const venta_nuevo = req.body;
        db.query('INSERT INTO ventas set ?', [venta_nuevo], (err, ventas) => {
            res.redirect('/');
    });
};*/

controller.list = (req,res) => {
    db.query('select ventas.id_ventas, clientes.id_cliente, libros.id_libro from ventas inner join libros on ventas.id_libro=libros.id_libro inner join clientes on ventas.id_cliente = clientes.id_cliente', (err, ventas)=>{
        res.render('index',{
            index:index
        })
    });
};

module.exports = controller;

