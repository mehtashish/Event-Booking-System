const Event = require('../models/eventModel');

const createEvent = async (req, res) => {
    try {
        const { title, description, dateNtime, location, totalSeats, availableSeats } = req.body;

        const event = await Event.create({
            title,
            description,
            dateNtime,
            location,
            totalSeats,
            availableSeats
        });

        res.status(201).json(event);
    } catch (error) {
        res.status(500).send("Error in creating event!");
    }
};

const getEvent = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).send("Event is not registered.");
        }

        await event.update(req.body);
        res.status(200).send("Event is updated!");
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) {
            return res.status(404).send("Event is not registered.");
        }

        await event.destroy();
        res.status(200).send("Event is deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
};