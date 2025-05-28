const { eventBook, cancelBook } = require("../controllers/bookingController");
const { authenticate } = require("../middlewares/authMiddleware");
const express = requre('express');
const router = express.Router();

router.post('/:eventID', authenticate, eventBook);
router.delete('/cancel/:bookingID', authenticate, cancelBook);


module.exports = router;