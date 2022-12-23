const attendance = (sequelize, type)=>{
    return sequelize.define('attendances', {
        idAttendance: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        participants: type.STRING,
        stateAttendace: type.STRING,
        creatAttendance:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateAttendance:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = attendance