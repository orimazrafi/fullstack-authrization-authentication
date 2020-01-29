const express = require("express");
const router = express.Router();
const { User } = require("../models/user")
var bcrypt = require('bcryptjs');
const { generateToken } = require("../models/user")

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const result = await bcrypt.compare(password, user.password)
        if (result) {
            const picked = (({ email, name, isAdmin }) => ({ email, name, isAdmin }))(user);
            const token = await generateToken(picked)
            return res.header("x-auth-token", token)
                .header("access-control-expose-headers", "x-auth-token")
                .send(picked)
        }


        res.status(400).send("email or password are invalid!")
    } catch (ex) {
        console.log(ex)
    }
})

module.exports = router