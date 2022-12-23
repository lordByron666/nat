const Client = (sequelize, type) => {
    return sequelize.define('clients', {
        idClient: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagesClient: type.STRING,
        usernameClient: type.STRING(99),
        passwordClient: type.STRING,
        typeIdentificationClient: type.STRING,
        identifiacationCardClient: type.STRING,
        nameClient: type.STRING,
        lastNameClient: type.STRING,
        emailClient: type.STRING,
        phoneClient: type.STRING,
        creatClient: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateClient: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = Client