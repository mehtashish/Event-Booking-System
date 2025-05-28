const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Booking = sequelize.define('Booking', {
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    eventID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = Booking;