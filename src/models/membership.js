const menbership = (sequelize, type) =>{
    return sequelize.define('menberships', {
        idMenbership: {
             type: type.INTEGER,
             primaryKey: true,
             autoIncrement: true
        },
        nameMenbership: type.STRING,
        descriptionMenbership: type.STRING(3000),
        valueMenbership: type.STRING,
        stateMenbership: type.STRING,
        creatMenbership:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateMenbership:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = menbership