const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser')
const connectToDb = require('./db/db.js');

// importing routes
const userRoutes = require('./routes/user.routes.js')

connectToDb();

app.use(cors());    // we are accepting request from every website 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())


app.use('/users',userRoutes)



app.get('/',(req,res) => {
    res.send("hello world");
})

module.exports = app;