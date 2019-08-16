const express = require('express');
const path = require('path');
const flightsRouter = require('./routes/flights');
const indexRouter = require('./routes/index');
const app = express();
const port = 3000;

require('./config/mongoose');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', indexRouter); // localhost:3000  || www.google.com
app.use('/flights', flightsRouter);


app.listen(port, function() {
    console.log(`Express is listening on port ${port}`);
});