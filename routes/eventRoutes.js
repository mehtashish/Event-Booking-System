const express = require('express');
const { getEvent, updateEvent, deleteEvent, createEvent } = require('../controllers/eventController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', getEvent);

router.post('/add', authenticate, authorize('admin'), createEvent);
router.patch('/update/:id', authenticate, authorize('admin'), updateEvent);
router.delete('/delete/:id', authenticate, authorize('admin'), deleteEvent);


module.exports = router;