const Booking = require('../models/bookingModel');
const Event = require('../models/eventModel');

const eventBook = async (req, res) => {
    const eventID = req.params.id;
    const userID = req.user.id;

    const event = await Event.findByPk(eventID);
    if (!event) {
        return res.status(404).send('Event does not exist!');
    }
    if (event.availableSeats < 1) {
        return res.send('Event is housefull.');
    }
    await Booking.create({ userID, eventID });
    await event.decrement('availableSeats');

    res.status(201).send('Your booking is done successfully.');
};

const cancelBook = async (req, res) => {
    const bookingID = req.params.id;
    const userID = req.user.id;

    const booking = await Booking.findOne({ where: { bookingID, userID } });
    if (!booking) {
        return res.status(404).send('There is no booking associated with this user!');
    }

    const event = await Event.findByPk(booking.eventID);
    if (event) {
        await event.increment('availableSeats');
    }

    await booking.destroy();
    res.status(200).send('Your booking is cancelled.');
};

module.exports = {
    eventBook,
    cancelBook
};