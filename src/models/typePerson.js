const typePerson = (sequelize, type) =>{
    return sequelize.define('typePersons', {
        idTypePerson: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameTypePerson: type.STRING,
        stateTypePerson: type.STRING,
        createTypePerson:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTypePerson: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{ 
        timestamps: false
    })
}

module.exports = typePerson
