const paymentTypeEvent = (sequelize, type) =>{
    return sequelize.define('paymentTypeEvents', {
        idPaymentTypeEvent: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        namePaymentTypeEvent: type.STRING,
        imagePaymentTypeEvent: type.STRING,
        createPaymentTypeEvent: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatePaymentTypeEvent: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false
    })
}

module.exports = paymentTypeEvent