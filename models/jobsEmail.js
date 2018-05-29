module.exports = function (sequelize, DataTypes) {

    var JobsEmail = sequelize.define('JobsEmail', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        jobsemailid: {
            type: DataTypes.STRING,
            notEmpty: true
        }
    });
    return JobsEmail;
}