'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const Books=require('./bookModel');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

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
const addBooks=require('./addBooks');
const deleteBooks=require('./deleteBooks');
const updataBooks=require('./updataBooks');
function findBook(req, res){
  const id=req.params.id;
  Books.find({"_id":id}, (error, data)=>{
    if(error) console.log(`error finding the book in the db:${error}`);
    else res.send(data);
  })
}
app.get('/books', getBooks)
app.post('/books', addBooks);
app.delete('/books/:id', deleteBooks);
app.put('/books/:id',updataBooks)
app.get('/books/:id', findBook);




app.get('/test', (request, response) => {

  response.send('test request received')

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
