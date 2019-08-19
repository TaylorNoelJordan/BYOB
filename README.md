# Passport Me!

## Description
__Passport Me!__ is a Build Your Own Backend (BYOB) project featuring one-to-many relationships between countries visited and cities in each of those countries. 

### Tech Emphasis
1. NodeJS w/ Express
1. Knex
1. PostgreSQL

### Installation and SetUp
From the command line:
1. `git clone https://github.com/TaylorNoelJordan/BYOB.git <PROJECT_NAME>`
1. Run `npm install`
1. Run `npm start`

In your browser:
Open localhost://3000/api/v1/countries

### Endpoints

| url           |     method    | options  | Sample Response |
| ------------- |:-------------:|    -----:|                  |
| `/api/v1/countries/`  | GET | none needed | `[{ name: 'Italy', population: 60483973, capital: 'Rome' }, { name: 'Spain', population: 46934632, capital: 'Madrid' }] |
| `/api/v1/cities/  |   GET    | none needed | `[{ name: 'Rome', population: 4355725, elevation: 69, country_name: 'Italy' }, { name: 'Florence', population: 380948, elevation: 160, country_name: 'Italy' }]` |
| `/api/v1/countries/:id` |   GET   |  none needed | ` name: 'Italy', population: 60483973, capital: 'Rome' }`|
| `/api/v1/countries/:id/cities` | GET | none needed |  `[{ name: 'Rome', population: 4355725, elevation: 69, country_name: 'Italy' }, { name: 'Florence', population: 380948, elevation: 160, country_name: 'Italy' }]` |
| `/api/v1/countries/:id/cities/:country_id` | GET | none needed | `{ name: 'Florence', population: 380948, elevation: 160, country_name: 'Italy' }` |
| `/api/v1/countries/` | POST | `{name: <String>, population: <Integer>, capital: <String>}` | `{ id: 33}` |
| `/api/v1/countries/:id/cities/` | POST | `{name: <String>, population: <Integer>, elevation: <Integer>, country_name: <String>}` | `{id: 45}` |
| `/api/v1/countries/:id/` | DELETE | none needed | `Country with id ${id} has been removed from your passport.` |


