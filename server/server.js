let express = require('express');

let app = express();

app.use('/', express.static('../client/public'));

app.listen(3000);