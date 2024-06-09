//importar express y router//
var express = require('express');
var router = express.Router();
const indexController= require("../controllers/indexController");


//crear rutas con sus sufijos//
/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);

//exportar ruteador//
module.exports = router;