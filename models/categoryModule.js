module.exports = (sequelize, Sequelize) => {
    var Category = sequelize.define("category", {
        //atributos
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nameCategory: {
            type: Sequelize.STRING,
        }        
        
    }, {
        timestamps: false,
        //para evitar que se conviertan en modelos plurales'
        freezeTableName: true,
    });

    return Category;
};