require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const sequelize = require('./config/db');
const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);


sequelize.sync()
    .then(() => {
        console.log("Database synced");
        app.listen(PORT, () => {
            console.log(`Booking system is running on port ${PORT}.`);
        });
    })
    .catch((err) => {
        console.error("Error in syncing database:", err);
    });