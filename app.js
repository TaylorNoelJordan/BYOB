const express = require('express');
const morgan = require('morgan');
const dbConnection = require('./connection');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.get('/api/v1/countries', (req, res) => {
    dbConnection('countries')
        .select('*')
        .then(countries => res.status(200).json(countries))
        .catch(error => res.json({error: error.message, stack: error.stack}));
});

app.get('/api/v1/countries/:id', (req, res) => {
    dbConnection('countries')
        .select('*')
        .limit(1)
        .where({ id: req.params.id })
        .then(country => res.status(200).json(country))
        .catch(error => res.json({error: error.message, stack: error.stack}));

})


app.listen(PORT, () => console.log(`Places I've been app is running!`))