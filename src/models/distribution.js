const distribution = (sequelize, type) =>{
    return sequelize.define('distributions', {
        idDistributions : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        seatType: type.STRING,
        maxParticipants: type.STRING,
        numLocalities: type.STRING,
        createlocalityUbication: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatelocalityUbication: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false,
    })
 
    }
module.exports = distribution
