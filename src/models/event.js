const event = (sequelize, type) =>{
    return sequelize.define('events',{
        idEvent:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameEvent: type.STRING,
        imageEvent: type.STRING,
        descriptionEvent: type.STRING(3000),
        priceEvents: type.STRING,
        dateInitEvent: type.STRING,
        dateFinishEvent: type.STRING,
        hourInitEvent: type.STRING,
        hourFinishEvent: type.STRING,
        stateEvent: type.STRING,
        
        creatEvent:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateEvent:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = event