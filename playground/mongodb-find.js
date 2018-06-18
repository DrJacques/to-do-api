const MongoClient = require('mongodb').MongoClient;
// const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodosApp',(err,db)=>{
    if(err){
        return console.log('unable to connect to mongodb server');
    }

    console.log('Connected successfully to the database server!');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //    // _id: 112,
    //     name:'Jacques',
    //     age: 27,
    //     location: 'Kigali - Rwanda'

    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert a record',err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());

    // })

    db.collection('Users').find({name:'Jacques'}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log('Unable to fetch data');
    });

    db.close();

});