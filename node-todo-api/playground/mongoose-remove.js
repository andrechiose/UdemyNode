const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove().then((doc) => {
//
// });


Todo.findByIdAndRemove('5a034231f51ea9536148e197').then((doc) => {
  console.log(doc)
});
