const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoListReview', {useNewUrlParser: true});

mongoose.Promise = global.Promise;

const todoListSchema = mongoose.Schema({
  name: {type: String},
  priority: {type: Number}, 
})

const todoListModel = mongoose.model('todoListModel', todoListSchema);

module.exports = todoListModel;

