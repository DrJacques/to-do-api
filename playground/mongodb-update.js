const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodosApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb server');
    }

    console.log('Connected successfully to the database server!');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b27a4b8744d35251d1ef153')
    },{
        $set:{
            completed: true
        }

    },{
        returnOriginal: false
    },(result)=>{
        console.log(result)
    })

    db.close();

});