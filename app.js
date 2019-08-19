const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
// const morgan = require('morgan');
// const dbConnection = require('./connection');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

// app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'));

app.get('/api/v1/countries', (req, res) => {
    database('countries')
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
    database('cities')
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
    database('countries')
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
    database('cities')
    .where('country_id', req.params.id)
    .select()
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
    database('cities')
    .where({ country_id: req.params.id })
    .andWhere({ id: req.params.country_id })
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

app.post('/api/v1/countries', (req, res) => {
        const newCountry = req.body;
        for (let reqField of [
            'name',
            'population',
            'capital'
        ]) {
            if (!newCountry[reqField]) {
                return res.status(422).send({
                    error: `Check post request format: { name: <String>, population: <Integer>, capital: <String> }. Fill in ${reqField} fields.`
                });
            }
        }
        database('countries')
        .insert(newCountry, 'id')
        .then(country => {
            res.status(201).json({ id: country[0] });
        })
        .catch(error => {
            res.status(500).json({error: error.message, stack: error.stack})
        })
});

app.post('/api/v1/countries/:id/cities', (res, req) => {
    const newCity = req.body;
    for (let reqField of [
        'name',
        'population',
        'elevation',
        'country_name'
    ]) {
        if(!newCity[reqField]) {
            return res.status(422).send({
                error: `Check post request format: { name: <String>, population: <Integer>, elevation: <Integer>, country_name: <String> }. Fill in ${reqField}`
            });
        }
    }
    database('cities')
    .insert(newCity, 'id')
    .then(city => {
        res.status(201).json({ id: city[0] });
    })
    .catch(error => {
        res.status(500).json({error: error.message, stack: error.stack})
    })
});

app.delete('/api/v1/countries/:id/', (req, res) => {
    const { id } = req.params;
    const removeCountry = [
        database('countries')
        .where({ id: id })
        .del()
    ];
    Promise.all(removeCountry)
    .then(() => {
        res.json({
            success: `Country with id ${id} has been removed from your passport.`
        });
    })
    .catch(error => {
        res.status(500).json({error: error.message, stack: error.stack})        
    })
})



app.listen(PORT, () => console.log(`Your passport is succesfully running on http://localhost:${PORT}`))