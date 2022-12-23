const tickets = (sequelize, type)=>{
    return sequelize.define('tickets', {
        idTickets: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codeTickets: type.STRING,
        amountTickets: type.STRING,
        maxCantTickets: type.STRING,
        valueTickets: type.STRING,
        dateTickets: type.STRING,
        stateTickets: type.STRING,
        creatTickets:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateTickets:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = tickets