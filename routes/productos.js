var express = require('express');
var router = express.Router();
var db=require('../database/conexion'); // aqui estoy importando el archivo de la conexion de la base de datos

/* GET Seccion Productos. (productos.ejs) */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM productos',function(error,resultados){
    console.log(resultados)
    res.render('productos',{ title: 'Productos en Stock',libros:resultados}) 
  })
});

module.exports = router;