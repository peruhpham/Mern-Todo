const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const todoRoutes = require('./routes/todo.routes');
const { errorHandler } = require('./middleware/error.middleware');
const { notFound } = require('./middleware/notfound.middleware');


const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const CLIENT_URL = process.env.CLIENT_URL || '*';
app.use(cors({ origin: CLIENT_URL }));


app.get('/', (req, res) => res.json({ ok: true, message: 'MERN Todo API' }));


app.use('/api/todos', todoRoutes);


app.use(notFound);
app.use(errorHandler);


module.exports = app;