const path = require('path');
const express = require('express');
const morgan = require('morgan');
const engine = require('express-handlebars');
const app = express();
const port = 3000;
const router = require('./routes/index');

//config middleware static file
app.use(express.static(path.join(__dirname, 'public'))); // => truy cap vao duong dan http://localhost:3000/image/f8-icon.png

//middleware for request.body
//dung khi use form submit trong html
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//dung khi use cac request trong js nhu fetch(), ....
app.use(express.json());

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//HTTP logger
app.use(morgan('combined'));

router(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
