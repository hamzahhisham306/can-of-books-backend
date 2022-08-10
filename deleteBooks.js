const Books=require('./bookModel');


function deleteBooks(req, res){
 const id=req.params.id;
 Books.findByIdAndDelete(id).then(book=>{
    res.send(book);
 }).catch(err=>{
    res.status(500).send(err.message);
})

}











module.exports=deleteBooks;