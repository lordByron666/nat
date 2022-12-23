const ubicationUser = (sequelize, type) => {
    return sequelize.define('ubicationUsers', {
        idUbicationUser: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        countryUbicationUser: type.STRING,
        cityUbicationUser: type.STRING,
        streetUbicationUser: type.STRING,
        numberHouseUbicationUser: type.STRING,
        createUbicationUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateUbicationUser: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,

    })
}

module.exports = ubicationUser