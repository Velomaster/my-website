require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const sendEmail = require('../backend/sendgrid');

const root = path.join(__dirname, '..', 'build/');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(root));

app.post('/form', (req, res) => {
    const {email, jobDescription, name} = req.body;

    sendEmail(email, jobDescription, name)
        .then(() => res.status(200).send())
        .catch(error => {
            console.error(error);
            
            if (error.response) {
                return res.status(500).json({message: error.response.body});
            }
            res.status(500).json({message: "Unexpected error..."});
        });
});

app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
});

module.exports = app;