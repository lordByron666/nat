const category = (sequelize, type) =>{
    return sequelize.define('categorys', {
        idCategory :{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageCategory: type.STRING,
        nameCategory: type.STRING,
        stateCategory: type.STRING,
        creatCategory:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateCategory:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = category