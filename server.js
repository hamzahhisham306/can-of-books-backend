'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());


mongoose
  .connect("mongodb+srv://hamzah:SAD6CQGOpPf7kFB3@cluster0.ngrbh6n.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection successful");
        console.log(con)
  })

const getBooks=require('./getBooks');

app.get('/books', getBooks)

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
