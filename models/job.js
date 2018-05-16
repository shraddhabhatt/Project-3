module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define('Job', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        jobtitle: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        companyname: {
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
        description: {
            type: DataTypes.TEXT,
            notEmpty: true
        }
    });
    return Job;
}