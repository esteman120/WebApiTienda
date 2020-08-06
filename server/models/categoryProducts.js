module.exports = (sequelize, Sequelize) => {
    var CategoryProducts = sequelize.define('category_products', {
        categoryId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        productId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return CategoryProducts;
};