const express = require('express');
const mongoDB = require('./util/database');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/css`));

app.use('/admin', require('./routes/admin'));
app.use('/', require('./routes/customer'));
app.use(require('./routes/error'));

app.listen(3000, () => {
    console.log('The port 3000 is listening...');
});