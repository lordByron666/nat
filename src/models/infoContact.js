const infoContact = (sequelize, type) =>{
    return sequelize.define('infoContacts', {
        idInfoContac: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descriptionInfoContact: type.STRING(5000),
        creatInfoContac:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateInfoContact:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = infoContact