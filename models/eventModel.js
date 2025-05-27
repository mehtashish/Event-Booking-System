const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Event = sequelize.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateNtime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
});


module.exports = Event;