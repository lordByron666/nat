const ticketBuy = (sequelize, type) =>{
    return sequelize.define('ticketBuys', {
        idTicketBuy: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateTicketBuy: type.STRING,
        maxCantTicketBy: type.STRING,
        creatTicketBuy:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        },
        updateTicketBuy:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull:false
        }
    }, {
        timestamps: false,
    })
}

module.exports = ticketBuy