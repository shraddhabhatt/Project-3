module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define('Event', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        description: {
            type: DataTypes.TEXT
        },
        date: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        address1: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        address2: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        city: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        state: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        zip: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        lat: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        lng: {
            type: DataTypes.STRING,
            notEmpty: true
        }
        
    });

    Event.associate = function (models) {
        Event.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Event;
}