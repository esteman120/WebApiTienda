const models = require('../models');

const Product = models.product;

exports.findAll = () => {
    return Product.findAll({
        include: [
            {
                
            }
        ]
    });
};