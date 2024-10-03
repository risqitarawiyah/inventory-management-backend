const express = require('express');
const router = express.Router();
const authService = require('./auth.service');

router.post('/register', async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await authService.register(username, email, password);

        res.status(201).json({ data: { username: newUser.username, email: newUser.email }, massage: "Registration Success!" });

        } catch (error) {
            res.status(400).json({ error: error.massage });
    }
})

router.post('/login', async (req, res, next) => {
    const { username, password} = req.body;

    try {
        const {user, token} = await authService.login(username, password);
        res.status(200).json({ data: { username: user.username, role: user.role, token }, massage: "Login Success!"});
    } catch (error) {
        res.status(400).json({ error: error.massage});
    }
})

module.exports = router;