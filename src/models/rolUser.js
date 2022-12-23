const rolUser = (sequelize, type)=>{
    return sequelize.define('rolUsers',{
        idRolUser :{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        createRolUsers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateRolUsers:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    }
    )
}

module.exports = rolUser