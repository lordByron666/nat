const clientDetail = (sequelize, type) => {
    return sequelize.define('clientDetails', {
        idClientDetail: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createClientDetail: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateClientDetail: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamp: false,
    })
}
module.exports = clientDetail
