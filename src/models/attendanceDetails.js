const attendanceDetails = (sequelize, type) =>{
    return sequelize.define('attendanceDetails', {
        idAttendanceDetails: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        creatAttendanceDetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateAttendanceDetails:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = attendanceDetails