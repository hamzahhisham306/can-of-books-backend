const Books=require('./bookModel');


function addBooks(req, res){
    console.log(req.body);
    const {newBook}=req.body;
    const book=new Books(newBook);
    book.save();
    console.log('be',newBook);
    res.status(201).json(book);
}

module.exports=addBooks;