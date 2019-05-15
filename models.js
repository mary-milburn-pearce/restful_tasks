////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/tasks_db');
    var TaskSchema = new mongoose.Schema({
        title: {type: String, required: true, minlength: 3},
        description: {type: String, required: true, minlength: 20},
        completed: {type: Boolean, required: false, default: false}
    }, {timestamps: true});
    mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'Task'
    var Task = mongoose.model('Task');

    ////Export Task so Controllers has access to it
    module.exports = Task;