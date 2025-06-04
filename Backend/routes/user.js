const express = require('express');
const router = express.Router();

const loginUser = (req ,res) => {
    res.send("Login page");
}

router.post('/login', loginUser);

const signinUser = (req, res) => {
    res.send("Sigin page");
}

router.post('/signin', signinUser);


const userProfile = (req, res) => {
    res.send("user's profile page");
}

router.get('/me', userProfile);

const otherUsersProfile = (req, res)=> {
    res.send("other user's profile");
}

router.get('/:userid', otherUsersProfile);

module.exports = router;
