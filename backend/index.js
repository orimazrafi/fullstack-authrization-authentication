const express = require("express");
const mongoose = require("mongoose")
const users = require('./routes/users')
const profile = require('./routes/profile')
const auth = require('./routes/auth')
const cors = require("cors")
const config = require('config');

const app = express();
let url = process.env.URL | 5000
app.listen(url);
app.use(cors())
app.use(express.json())
app.use("/api/users", users)
app.use("/api/profile", profile)
app.use("/api/auth", auth)


// module.exports = function () {
if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
}
// }


mongoose.connect(config.get("db"), { useNewUrlParser: true, useUnifiedTopology: true })
    .then("we are connecting ")
    .catch(err => {
        "trouble connecting", err
    })



