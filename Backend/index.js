const express = require('express');
const app = express();

const userRouter = require('./routes/user');

app.use('/users', userRouter);

app.get('/', (req,res) => {
    res.send("Home page");
})

app.listen(3000, () => {
    console.log("server is running");
})