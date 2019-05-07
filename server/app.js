const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const productRoutes = require('./api/routes/products');
// const orderRoutes = require('./api/routes/order');
const userRoutes = require('./api/routes/user');
const todoRoutes = require('./api/routes/todo');

mongoose.connect('mongodb+srv://admin:cMefVOUAeETxn3TZ@cluster0-6cyao.mongodb.net/sudokid?retryWrites=true',{ useNewUrlParser: true });

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
// app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allows-Origin', '*');
    res.header('Origin','X-Requests-With','Content-Type','Accept','Authorization');
    if(req.method ===   'OPTIONS') {
        res.header('Access-Control-Allows-Methods','GET, POST,PATCH,PUT,DELETE');
        return res.status(200).json({});
    }
    next();
});

// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);
app.use('/todos', todoRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
   next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message: error.message  
        }
    });
});
module.exports = app;