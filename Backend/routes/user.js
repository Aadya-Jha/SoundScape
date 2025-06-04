const express = require('express');
const router = express.Router();

const loginUser = (req ,res) => {
    res.send("Login page");
}

router.post('/login', loginUser);

const {
    userSignin,
    getUserProfile,
    otherUsersProfile,
} = require('../controllers/userController')

router.post('/signin', userSignin);
router.get('/me', getUserProfile);
router.get('/:userid', otherUsersProfile);

module.exports = router;
