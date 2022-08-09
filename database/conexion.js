var mysql      = require('mysql');
var conexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database:'ventasnodejs'
});
conexion.connect((err)=>{
    if(!err){
        console.log("Conexion a la base de datos exitosa!")
    }else{
        console.log("Error en la conexion a la base de datos")
    }
});

/*conexion.query("SELECT * FROM productos",function(error,resultados){
    console.log(resultados)
});

conexion.end();*/

module.exports=conexion; //aqui estoy importando este modulo de la conexion de la base de datos