const categoryDetails = (sequelize, type) =>{
    return sequelize.define('categoryDetails', {
        idCategoryDetails :{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameCategoryDetails: type.STRING,
        stateCategoryDetails: type.STRING,
        creatCategoryDetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateCategoryDetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = categoryDetails