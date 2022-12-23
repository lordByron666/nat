const eventDetail = (sequelize, type) =>{
    return sequelize.define('eventDetails', {
        idEventDetail:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        favouriteEventDetail: type.STRING,
        creatEventDetail:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateEventDatil:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = eventDetail