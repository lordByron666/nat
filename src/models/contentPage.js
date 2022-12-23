const contentPage = (sequelize, type) =>{
    return sequelize.define('contentPages', {
        idcontentPage: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagenContentPage: type.STRING,
        nameContentPage: type.STRING,
        descriptionContentPage: type.STRING,
        stateContentPage: type.STRING,
        createContentPage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateContentPage: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamp: false,
    })
}
module.exports = contentPage
