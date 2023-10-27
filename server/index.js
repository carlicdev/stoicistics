const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
    exposedHeaders: 'Authorization',
  };

// Routers
const userRouter = require('./routes/users');

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Api
app.use('/api/v1/users', userRouter);

app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT);
});