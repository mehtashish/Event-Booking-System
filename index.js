const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Booking system is running on port ${PORT}.`);
});