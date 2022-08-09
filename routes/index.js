// En este archivo index.js estaran almacenadas las diferentes rutas de mi sitio web, las rutas vendrian a ser los archivos que estan la carpeta views que son las diferentes vistas o pantallas de mi sitio web
var express = require('express');
var router = express.Router();

/* GET home page. (index.ejs) */
router.get('/', function(req, res, next) { // en el get ponemo como sera ingresado a esa ruta en nuestro sitio web, va entre comillas y se usa el slash(/)
 res.render('index', { title: 'Express' });
});

/* GET Seccion Nosotros. (nosotros.ejs) */
router.get('/nosotros',function(req,res){ 
  res.render('nosotros',{ title: 'Aaron Ortiz' }) // en el render ponemos el nombre del archivo al cual queremos direccionar dentro de nuestro sitio web y va entre comillas
})


/* GET Seccion Productos. (productos.ejs) 
router.get('/productos',function(req,res){ 
  res.render('productos',{ title: 'Productos en Stock' })  
});  esta ruta en especial la pase al archivo productos.js que esta en la carpeta routes pero solo es un cambio transparente ya que no afecta en nada y lo hice porque a ese archivo voy a pasarle la conexion de la base de datos*/ 

module.exports = router;
