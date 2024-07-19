

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express()

//MiddleWare
app.use(bodyParser.json());
app.use(cors());

//Connect Database
connectDB();

//Routes

app.use('/api/todos', require('./routes/todoRoutes'));

// Error Handling Middleware
// It captures any errors that occur during the request-handling process
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
