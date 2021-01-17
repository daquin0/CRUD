const express = require('express');
const mysql = require('mysql');
const path =require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const db= mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'libreriaCliente',
    port:'3306',
});

const public = path.join(__dirname,"./public");
app.use(express.static(public));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.set('view engine','hbs');

db.connect((error) =>{
    if(error){
        console.log(error);
    }
    else{
        console.log("La base se conecto exitosamente");
    }
});

//definir rutas
app.use('/', require('./routes/pages'));

app.listen(3000,() =>{
    console.log("El server esta corriendo en el puerto 3000")
});
