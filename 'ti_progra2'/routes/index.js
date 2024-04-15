var express = require('express');
var router = express.Router();
//const productController= require("../controllers/indexControllers");

/* GET home page. */
router.get('/', function(req, res, next) { //ruta a url ppal del proyecto, 
  res.render('index', { title: 'Express' }); //metodo render: en vez de enviar lo que queremos al navegador en un string, cita archivo de vista donde se define el codigo que queremos que se muestre en el navegador
  
});

module.exports = router;