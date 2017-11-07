const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongo db server');
  }

  console.log('Connected to mongo db server');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // },(err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo ',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // } );

  db.collection('Users').insertOne({
    name: 'Andre',
    age: 26,
    location: 'Indaiatuba'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user ', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.close();
});
