const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a01d94340dac883689e6f83';
var userId = '5a01a5787b2da45215481422';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ',todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ',todo);
// });

if(!ObjectId.isValid(id)){
  console.log('Id not valid');
}

Todo.findById(id).then((todo) => {
  console.log('Todo: ',todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log('User: ',user);
}).catch((e) => console.log(e));
