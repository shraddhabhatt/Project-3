module.exports = function (sequelize, DataTypes) {

    var EventsEmail = sequelize.define('EventsEmail', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        emailid: {
            type: DataTypes.STRING,
            notEmpty: true
        }
    });
    return EventsEmail;
}