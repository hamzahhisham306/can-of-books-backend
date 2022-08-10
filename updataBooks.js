const Books=require('./bookModel');


function updataBooks(req, res){
 const id=req.params.id;
 const {data}=req.body;
 console.log(id, data);
 Books.findByIdAndUpdate(id, data).then(book=>{
    res.send(book);
 }).catch(err=>{
    console.log(err.message);
    res.status(500).send(err.message);
 })

}


module.exports=updataBooks;