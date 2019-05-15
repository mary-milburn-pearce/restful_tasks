//MODULARIZATION WITH MODELS:
    const Task = require("./models")

//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
// app.get('/', controller.index)  
// app.get('/:id', controller.getTask)
// app.post('/new', controller.addTask)
// app.put('/update/:id', controller.updTask)
// app.delete('/remove/:id', controller.remTask)

module.exports = {

    index:function(req, res){
        console.log(req.body, req.params);
        Task.find({}, function(err, tasks) {
            console.log(err, tasks);
            res.json(tasks);
        })
    },

    getTask:function(req, res) {
        console.log(req.body, req.params);
        Task.findById(req.params.id, function(err, task) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(task);
            }
        })
    },

    addTask:function(req, res){
        console.log(req.body, req.params);
        Task.create(req.body, function(err, task) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(task);
            }
        })
    },

    updTask:function(req, res) {
        console.log(req.body, req.params);
        Task.findByIdAndUpdate(req.params.id, req.body, 
            function(err, task) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(task);
                }
            })
    },

    remTask:function(req, res) {
        console.log(req.body, req.params);
        Task.findByIdAndDelete(req.params.id, function(err, task) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(task);
            }
        })
    },



}
