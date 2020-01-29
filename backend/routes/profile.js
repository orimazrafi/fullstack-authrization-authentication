const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin")



router.get("/", [auth, admin], async (req, res) => {
    try {
        res.status(200).send('profile')
        // const { email, name, password } = req.body
        // const user = await User.findOne({ email });
        // if (user) return res.status(400).send("user is already register!")
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt)
        // const newUser = new User({
        //     email,
        //     name,
        //     password: hashedPassword
        // });

        // const result = await newUser.save()
        // const picked = (({ email, name, _id }) => ({ email, name, _id }))(result);
        // const token = await generateToken(picked)

        // res.header("x-auth-token", token)
        //     .header("access-control-expose-headers", "x-auth-token")
        //     .send(picked)
    } catch (ex) {
        console.log(ex)
    }
})

module.exports = router