module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define('Job', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        jobTitle: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        companyName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        location: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        description: {
            type: DataTypes.TEXT,
            notEmpty: true
        },
        qualification: {
            type: DataTypes.TEXT,
            notEmpty: true
        }
    });
    return Job;
}