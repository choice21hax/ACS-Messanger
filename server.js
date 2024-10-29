const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',
    password: 'yourPassword',
    database: 'yourDatabase'
});

// Connect to MySQL database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// Handle login requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';

    db.query(query, [email], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const user = results[0];
            // Compare hashed password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    res.redirect('/dashboard');
                } else {
                    res.send('Incorrect password.');
                }
            });
        } else {
            res.send('Your account was not found, do you want to <a href="/signup.html">sign-up</a>? If you have an account, check your email.');
        }
    });
});

// Handle signup requests
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    const checkQuery = 'SELECT * FROM users WHERE email = ?';

    db.query(checkQuery, [email], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.redirect('/login?message=redirected');
        } else {
            // Hash password before storing
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) throw err;
                const insertQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
                db.query(insertQuery, [email, hash], (err, results) => {
                    if (err) throw err;
                    res.redirect('/dashboard');
                });
            });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});