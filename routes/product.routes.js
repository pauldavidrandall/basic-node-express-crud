const express = require('express');
const router = express.Router();

//require controllers
const product_controller = require('../controllers/product.controller');

//test url
router.get('/test', product_controller.test);

//api urls
router.post('/', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id', product_controller.product_update);
router.delete('/:id', product_controller.product_delete);


module.exports = router;