const rol = (sequelize, type)=>{
    return sequelize.define('rols',{
        idRol :{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nameRol: type.STRING(),
        creatRol:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateRol:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    }
    )
}

module.exports = rol