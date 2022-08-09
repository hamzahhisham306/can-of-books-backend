const Books=require('./bookModel');

function getBooks(req, res){
    try{
        Books.find({}, (error, data)=>{
            if(error) console.log('error is equal='+error);
            else res.send(data);
        })
    }
    catch(error){
        console.log(error);
    }
}



module.exports =getBooks;