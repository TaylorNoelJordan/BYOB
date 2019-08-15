const express = require('express');
const morgan = require('morgan');
const dbConnection = require('./connection');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.get('/api/v1/crystals', (req, res) => {
    dbConnection('crystal')
        .select('*')
        .then(crystals => res.status(200).json(crystals))
        .catch(error => res.json({error: error.message, stack: error.stack}));
});

app.get('/api/v1/crystals/:id', (req, res) => {
    dbConnection('crystal')
        .select('*')
        .limit(1)
        .where({ id: req.params.id })
        .then(crystal => res.status(200).json(crystal))
        .catch(error => res.json({error: error.message, stack: error.stack}));

})


app.listen(PORT, () => console.log(`Little shop of crystals running!`))