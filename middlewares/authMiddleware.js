const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).send("Unauthorized access!");
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = tokenDecode;

        next();
    } catch (error) {
        res.status(401).send("Token invalid!");
    }
};

const authorize = (role) => (req, res, next) => {
    if (req.user.role !== role) {
        return res.status(403).send("Access denied!");
    }

    next();
};


module.exports = {
    authenticate,
    authorize
};