const express = require('express');
const router = express.Router();
const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// login

// register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        // Encrypt password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [username, email, hashedPassword];

        const result = await db.query(query, values);

        res.status(201).json(result[0]);
    } catch (error) {
        console.error('Error registering new user:', error);
        res.status(500).json({ error: 'Error registering new user'});
    }
})

module.exports = router;