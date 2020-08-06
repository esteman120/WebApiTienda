module.exports = (sequelize, Sequelize) => {
    var Product = sequelize.define("product", {
        //atributos
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.STRING,
        },
        datePublish: {
            type: Sequelize.DATE,
        },
        description: {
            type: Sequelize.STRING,
        }        
        
    }, {
        timestamps: false,
        //para evitar que se conviertan en modelos plurales'
        freezeTableName: true,
    });

    return Product;
};