
let countriesData = require('../../data/countriesData');
let citiesData = require('../../data/citiesData');

const createCountry = (knex, country) => {
  return knex('countries').insert({
    name: country.name,
    population: country.population,
    capital: country.capital
  }, 'id')
  .then(countryId => {
    let cityPromises = [];

    citiesData.forEach(city => {
      cityPromises.push(
        createCity(knex, {
          name: city.name,
          population: city.population,
          elevation: city.elevation,
          country_name: city.country_name,
          country_id: countryId[0]
        })
      )
    });

    return Promise.all(cityPromises);
  })
};

const createCity = (knex, city) => {
  return knex('cities').insert(city);
};

exports.seed = (knex) => {

  return knex('cities').del()
  .then(() => knex('countries').del())
  .then(() => {
    let countryPromises = [];

    countriesData.forEach(country => {
      countryPromises.push(createCountry(knex, country));
    });

    return Promise.all(countryPromises);
  })
  .catch(error => console.log(`Error seeding data: ${error}`));

};
