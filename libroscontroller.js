const controller = {};
const db= require('../database');

controller.show = (req, res) => {
      db.query('SELECT * FROM libros', (err, libros) => {
        if (err) {
        res.json(err);
        }
        res.render('libros',{
            libros:libros
        });
    });
    };

controller.create =(req,res)=>{
    const libro_nuevo = req.body;
    db.query('INSERT INTO libros set ?', [libro_nuevo], (err, libros) => {
        res.redirect('/libros');
    });
};
    
controller.delete = (req,res) =>{
    const {id_libro} = req.params;
    db.query('delete from libros where id_libro = ?', [id_libro], (err, libros) =>{
        if (err) {
            res.json(err);
            }
        else{
            res.redirect('/libros');
        }
    });
};

/*controller.update = (req,res) => {
    const id = req.body.hidden_id;
    const titulo_new = req.body.titulo_new;
    const autor_new = req.body.autor_new;
    const editorial_new = req.body.editorial_new;
    const lugar_publicacion_new = req.body.lugar_publicacion_new;
    const precio_new = req.body.precio_new;
    db.query('update libros set titulo = ?, autor = ?, editorial = ?, lugar_publicacion = ?, precio = ? where id = ?', [titulo_new , autor_new, editorial_new,lugar_publicacion_new,precio_new , id], async (error, libros) => {
        res.redirect('/libros');
    });
};*/

/* controller.update =(req,res)=>{
        res.send('Hola');
    };*/


module.exports = controller;
