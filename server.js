const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat_box'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});


// Get Contact Data
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM contact', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
