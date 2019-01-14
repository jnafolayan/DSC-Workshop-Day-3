const express = require('express');
const routes = require('./routes');

const app = express();

// save port
app.set('port', 3000);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

// Handle endpoints
routes.exec(app);

app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));
