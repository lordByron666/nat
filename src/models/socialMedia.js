const socialMedia = (sequelize, type) => {
    return sequelize.define('socialMedias', {
        idSocialMedia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameSocialMedia: type.STRING,
        stateSocialMedia: type.STRING,
        creatSocialMedia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateSocialMedia: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = socialMedia