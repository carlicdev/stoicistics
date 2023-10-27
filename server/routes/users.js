const express = require('express');
const router = express.Router();
const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

// login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await db.query(query, [email]);

        if (result.length === 0) {
            return res.status(401).json({
                error: 'Email not registered.'
            })
        }

        const user = result[0];

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error: 'Wrong Password!'
            })
        }

        if (passwordMatch) {
            const token = jwt.sign({ userId: user.user_id, username: user.username }, jwtSecret, {
                expiresIn: '1h',
              });
            res.status(200)
            .header('Authorization', `Bearer ${token}`)
            .json({ 
                message: 'Login Successful!',
                user: {
                    email: user.email,
                    username: user.username,
                    id: user.user_id
                }
             })
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in'});
    }
})

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

        res.status(201).json({
            message: 'Registration Successful'
        });
    } catch (error) {
        console.error('Error registering new user:', error);
        res.status(500).json({ error: 'Error registering new user'});
    }
})

module.exports = router;