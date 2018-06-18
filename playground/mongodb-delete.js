const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://127.0.0.1:27017/TodosApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb server');
    }

    console.log('Connected successfully to the database server!');

    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
        console.log('The content was succcessfully deleted');
        console.log(result);
    });
   

    db.close();

});