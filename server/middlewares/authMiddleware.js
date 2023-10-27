const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;


exports.getUserIdFromToken = (req, res, next) => {
    try {
        const token = req.header('Authorization').split(' ')[1];
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
