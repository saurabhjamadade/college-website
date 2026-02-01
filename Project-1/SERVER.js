const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'su@1735', // Change to your MySQL password
    database: 'bca_department'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// API Route to save form data
app.post('/register', (req, res) => {
    const { firstName, lastName, contactNumber, email, gender } = req.body;
    const sql = 'INSERT INTO admissions (first_name, last_name, contact_number, email, gender) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, contactNumber, email, gender], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to save');
        } else {
            res.send('Registration successful');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
