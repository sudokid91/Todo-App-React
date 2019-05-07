const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: true },
    note : {type: String, require: true}
});

module.exports = mongoose.model('Todo', todoSchema);