let express = require('express');
let connection = require('./db/config');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('../client/public'));

app.post('/api/checkout', (req,res,next) => {
  let user = req.body.user;
  let shipping = req.body.shipping;
  let payment = req.body.payment;

  connection.query('INSERT INTO accounts SET firstName=?,lastName=?,email=?,password=?,mailingList=?,registerDate=?', [user.firstName, user.lastName, user.email, user.password, user.mailingList, user.regusterDate]);

  res.statusCode = 200;
  res.end();

  next();
});

app.listen(3000);