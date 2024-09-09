const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const https = require('https');
const app = express();

// SSL options for secured communication
const sslOptions = {
  key: fs.readFileSync('certs', 'ssl_key.pem'),
  cert: fs.readFileSync('certs','ssl_cert.pem')
};

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'mysql_db', // Docker service name
  user: 'root',
  password: 'password',
  database: 'mydb',
  ssl: {
    rejectUnauthorized: false
  }
});

// Sample API route
app.get('/api', (req, res) => {
  connection.query('SELECT * FROM sample_table', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Starting the server with HTTPS
https.createServer(sslOptions, app).listen(3000, () => {
  console.log('API running on https://localhost:3000');
});
