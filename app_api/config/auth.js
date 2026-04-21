const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const token = req.headers.authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'MY_SECRET');
        req.auth = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = auth;