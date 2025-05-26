const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registration = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 5);
        const newUser = await User.create({
            name,
            email,
            password: hashedPass,
            role
        });

        res.status(201).send('User registered successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Registration failed!');
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send('User not registered.');
        }

        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res.status(401).send('Invalid Credentials!');
        }

        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET not defined.');
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Login failed.');
    }
};


module.exports = {
    registration,
    login
};