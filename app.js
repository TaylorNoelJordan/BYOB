const environment = process.env.NODE_ENV || 'development';
//this declaration of environment allows our environment to be available for production in addition to locally
const configuration = require('./knexfile')[environment];
//this declaration of configuration pulls our knex file and integrates it with the operating environment.
const database = require('knex')(configuration);
//we call database here to integrate our use of our local database with the appropriate environment.
const PORT = process.env.PORT || 3000;
//this declaration of port allows the port to be dynamic depending upon the working environment.
const express = require('express');
//this declaration of express reference the express library.
const app = express();
//this allows us to use the express library when defining our endpoints.
app.use(express.json());
//this allows the usage of json formatting.

app.get('/', (req, res) => {
    res.send('Welcome to Passport Me!')
});
//this displays a message to the user that the app is up and working.

app.get('/api/v1/countries', (req, res) => {
    //first we define the end url,
    database('countries')
    //we reference our local database and name the table we want,
        .select('*')
        //select everything from that table
        .then(countries => {
            if(countries) {
                res.status(200).json(countries)
                //sends success status if countries are successfully located
            } else {
                res.status(404).json('No countries found')
                //sends 'not found' status if there is an error
            }
        })
        .catch(error => {
            res.status(500).json({error: error.message, stack: error.stack})
            //or sends a server error message
        });
});

//* see above *//
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

//* see above *//
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

//* see above *//
app.get('/api/v1/countries/:id/cities', (req, res) => {
    database('cities')
    .where('country_id', req.params.id)
    //adding parameter from the user's request to find corresponding ID within the data
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

//* see above *//
app.get('/api/v1/countries/:id/cities/:country_id', (req, res) => {
    database('cities')
    .where({ country_id: req.params.id })
    .andWhere({ id: req.params.country_id })
    //adding second parameter from user's request to find both corresponding country and city from data
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
    //first we outline the url,
        const newCountry = req.body;
        //then identify the body of the request that comes through
        for (let reqField of [
            //as the request comes in, outline specific fields of how it is expected to be received
            'name',
            'population',
            'capital'
        ]) {
            if (!newCountry[reqField]) {
                //if any part of the request body does not align with what is expected,
                return res.status(422).send({
                    //return an error letting the user know what to fix
                    error: `Check post request format: { name: <String>, population: <Integer>, capital: <String> }. Fill in ${reqField} fields.`
                });
            }
        }
        database('countries')
        //otherwise
        .insert(newCountry, 'id')
        //add the new country, with auto-incrementing id
        .then(country => {
            res.status(201).json({ id: country[0] });
            //send status that the post has been received
        })
        .catch(error => {
            res.status(500).json({error: error.message, stack: error.stack})
            //or send an error
        })
});

//* see above *//
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
    //first outline the url,
    const { id } = req.params;
    //then deconstruct the id from the request params
    const removeCountry = [
        database('countries')
        //access the appropriate table from the database
        .where({ id: id })
        //and specify that the id should match the id from the request
        .del()
        //delete the entry
    ];
    Promise.all(removeCountry)
    //upon all of the criteria above being met
    .then(() => {
        res.status(202).json({
            success: `Country with id ${id} has been removed from your passport.`
            //return to the user that the entry has been deleted
        });
    })
    .catch(error => {
        res.status(500).json({error: error.message, stack: error.stack})        
        //otherwise, return an error
    })
})



app.listen(PORT, () => console.log(`Your passport is succesfully running on http://localhost:${PORT}`))
//when the user successfully starts up the app, this line will appear in the terminal