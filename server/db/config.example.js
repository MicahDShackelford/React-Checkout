let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'checkout'
});

connection.connect((err) => {
  if(err) {
    console.log(err);
  }else {
    console.log("Connected to database");
  }
});

module.exports = connection;