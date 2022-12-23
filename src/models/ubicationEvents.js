const ubicationEvent = (sequelize, type) => {
    return sequelize.define('ubicationEvents', {
        idUbicationEvent: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descriptionUbicationEvent: type.STRING,
        localeUbicationEvent: type.STRING,
        sectionUbicationEvent: type.STRING,
        numberUbicationEvent: type.STRING,
        linkUbicationEvent: type.STRING,
        createUbicationEvent: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateUbicationEvent: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = ubicationEvent