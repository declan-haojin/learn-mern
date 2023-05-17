const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const morgan = require('morgan');

connectDB();

require('./config/passport')(passport);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(errorHandler);

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// Sessions
app.use(session({
    secret: 'root causes',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/records', require('./routes/recordRoutes'));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    }
);
