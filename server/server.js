let express = require('express');
let connection = require('./db/config');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('../client/public'));

app.post('/api/checkout', (req,res,next) => {
  console.log(req.body);
  res.end("thanks")
  next();
});

app.listen(3000);