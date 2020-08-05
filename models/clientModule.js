module.exports = (sequelize, Sequelize) => {
    var Client = sequelize.define("client", {
        //atributos
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        numId: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        phoneNumber: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        }
        
    }, {
        timestamps: false,
        //para evitar que se conviertan en modelos plurales'
        freezeTableName: true,
    });

    return Client;
};