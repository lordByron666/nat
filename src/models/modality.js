const modality = (sequelize, type) =>{
    return sequelize.define('modalitys', {
        idModality :{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameModality: type.STRING,
        stateModality: type.STRING,
        creatModality:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateModality:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = modality