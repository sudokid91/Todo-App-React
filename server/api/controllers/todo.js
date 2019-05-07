const Todo = require("../models/todo"); 
const mongoose = require('mongoose');
exports.get_todos = (req, res, next) => {
    Todo.find()
        .select('title description note _id')
        .exec()
        .then( docs => {
            const response = {
                count : docs.length,
                todos : docs.map( doc => {
                    return {
                        title : doc.title,
                        description: doc.description,
                        _id : doc.id,
                        note: doc.note,
                        reques : {
                            type: 'GET',
                            url : 'http://localhost:6969/todos/'+ doc._id
                        }
                    }
                })
            }
            // console.log('Get all products from db: '+response);
            if(docs.length > 0){
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message : 'DB empty'
                });
            }
        })
        .catch( err => {
            console.log('Error get all todos from db: '+err);
            res.status(500).json({
                error : err
            })
        });
};
exports.post_todo = (req, res, next) => {  
   console.log("hehe");
    const todo = new Todo( {
        _id : mongoose.Types.ObjectId(), 
        title : req.body.title,
        description : req.body.description,
        note: req.body.note
    });
    todo.save()
    .then(result => {
        res.status(201).json({
            message: 'Todo stored',
            createTodo : {
                _id :result._id,
                title : result.title,
                description:result.description,
                note: result.note
            },
            request : {
                type: 'POST',
                url: 'http://localhost:6969/todos/'+result._id
            }
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};
exports.get_todo = (req, res, next) => {
    const id = req.params.todoId;
    Todo.findById(id)
        .select( ' title description _id note')
        .exec()
        .then(doc => {
            // console.log(doc);
            if(doc) {
                res.status(200).json({
                    todo: doc,
                    request : {
                        type : 'GET by ID',
                        url: 'htpp://localhost:6969/todos/' + doc._id
                    }
                })
            } else {
                res.status(404).json({
                    message : 'Not found document by provide ID'
                });
            }
            
        })
        .catch(error => {
            // console.log(error);
            res.status(500).json({error});
        });
    
};

exports.update_todo = (req, res, next) => {
    const id = req.params.todoId;
    const updateOps = {}
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Todo.update({_id:id}, {$set : updateOps})
        .exec()
        .then(result => {
            // console.log(result);
            res.status(200).json({
                message : 'Todo updated',
                request : {
                    type: 'GET',
                    url : 'http://localhost:6969/todos/' + id
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error : err
            });
        });
};

exports.delete_todo = (req, res, next) => {
    const id = req.params.todoId;
    Product.remove({_id : id})
        .exec()
        .then(result => {
            // console.log('delete product by id: '+result);
            res.status(200).json({
                message : 'Todo deleted',
                request : {
                    type: 'POST',
                    url : 'http://localhost:6969/todos',
                    data : {title: 'String', description: 'String', note:"String"}
                }
                
            });
        })
        .catch(err =>{
            console.log('Error delete todo by id: '+err);
            res.status(500).json({
                error: err
            });
        });
};
