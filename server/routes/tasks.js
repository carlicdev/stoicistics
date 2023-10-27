const express = require('express');
const router = express.Router();
const db = require('../db/db');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.getUserIdFromToken, (req, res) => {
    res.send('hello protected route')
})


module.exports = router;