const mongoose = require('mongoose');

const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const api = require('./routes/api');

const cors = require('cors');

mongoose.connect("mongodb://aleseyko:12345qwerty@ds147842.mlab.com:47842/lex-db",{ useNewUrlParser: true }, () => {
    console.log("[DB]: Successfully connected");
});

const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/api/', api);

app.listen(3000, function () {
    console.log('[Server]: I am listen on port 3000');
});
