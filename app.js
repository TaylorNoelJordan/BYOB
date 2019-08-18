const express = require('express');
// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('./knexfile'[environment]);
const morgan = require('morgan');
const dbConnection = require('./connection');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.get('/api/v1/countries', (req, res) => {
    dbConnection('countries')
        .select('*')
        .then(countries => {
            if(countries) {
                res.status(200).json(countries)
            } else {
                res.status(404).json('No countries found')
            }
        })
        .catch(error => {
            res.status(500).json({error: error.message, stack: error.stack})
        });
});

app.get('/api/v1/cities', (req, res) => {
    dbConnection('cities')
    .select('*')
    .then(cities => {
        if(cities) {
            res.status(200).json(cities)
        } else {
            res.status(404).json('No cities found')
        }
    })
    .catch(error => {
        res.status(500).json({error: error.message, stack: error.stack})
    });
})

app.get('/api/v1/countries/:id', (req, res) => {
    dbConnection('countries')
        .select('*')
        .limit(1)
        .where({ id: req.params.id })
        .then(country => {
            if(country) {
                res.status(200).json(country)
            } else {
                res.status(404).json(`No country found with id ${request.params.id}`)
            }
        })
        .catch(error => {
            res.status(500).json({error: error.message, stack: error.stack})            
        });

});

app.get('/api/v1/countries/:id/cities', (req, res) => {
    dbConnection('cities')
    .where({ country_id: req.params.id })
    .select('*')
    .then(cities => {
        if(cities.length) {
            res.status(200).json(cities);
        } else {
            res.status(404).json('No cities available for selected country')
        }
    })
    .catch(error => {
        res.status(500).json({error: error.message, stack: error.stack})
    })
})

app.get('/api/v1/countries/:id/cities/:country_id', (req, res) => {
    dbConnection('cities')
    .where({ country_id: req.params.id })
    .andWhere({ id: req.params.country_id})
    .select()
    .then(cities => {
        if(cities.length) {
            res.status(200).json(cities)
        } else {
            res.status(404).json(`No city with id ${req.params.id} was found`)
        }
    })
    .catch(error => {
        res.status(500).json({error: error.message, stack: error.stack})
    });
});

app.post('api/v1/countries/', (req, res) => {
    dbConnection('countries')
    .select()
    .then()

})

app.post('/api/v1/countries/:id/cities')

app.listen(PORT, () => console.log(`Places I've been app is running!`))