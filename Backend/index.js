const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user');
const songRouter = require('./routes/songs');

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/songs', songRouter);

app.get('/', (req,res) => {
    res.send("Home page");
})

app.listen(3000, () => {
    console.log("server is running");
})