const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require('./db/models');

db.sequelize.sync();

const app = express();  // need to invoke the function express function with ()

app.use(bodyParser.json());

app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/authors', require('./routes/authors'));

app.get('/', (req,res) => {
    res.status(200).json('Hitting the root of app.js');
});



module.exports = app;