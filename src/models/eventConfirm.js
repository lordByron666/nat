const evetConfirm = (sequelize, type) =>{
    return sequelize.define('evetConfirms', {
        idEvetConfirm: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stateEvetConfirm: type.STRING,
        createEvetConfirm: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateEvetConfirm: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,

    })
}

module.exports = evetConfirm