const gener = (sequelize, type) =>{
    return sequelize.define('geners', {
        idGener: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameGener: type.STRING,
        stateGener: type.STRING,
        createGener: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateGener: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,

    })
}

module.exports = gener