const suscription = (sequelize, type) => {
    return sequelize.define('suscriptions', {
        idSuscription: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameSuscription: type.STRING,
        descriptionSuscription: type.STRING(3000),
        valueSuscription: type.STRING,
        stateSuscription: type.STRING,
        createSuscription: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateSuscription: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,

    })
}

module.exports = suscription