const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test Controller!');
};

exports.product_create = function (req, res) {
    console.log(req.body.name);
    let product = new Product (
        {
        name: req.body.name,
        price: req.body.price
        }
    );
    
     product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created Successfully!')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product){
        if (err) {
            return next(err);
        }
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set:req.body}, function (err, product) {
        if (err){
            return next(err);
        }
        res.send('Product Updated!');
    })
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product deleted successfully!');
    })
};