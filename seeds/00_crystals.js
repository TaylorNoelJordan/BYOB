
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('crystal').del()
    .then(function () {
      // Inserts seed entries
      return knex('crystal').insert([
        {
          type: 'Selenite', 
          quantity: '30', 
          image: 'https://www.feelcrystals.com.au/wp-content/uploads/2015/06/Selenite-Specimen-12.jpg'
        },
        {
          type: 'Aventurine', 
          quantity: '27', 
          image: 'http://nasvete.com/wp-content/uploads/2015/01/Sparkling-with-stars-Aventurine-3.jpg'
        },
        {
          type: 'Citrine', 
          quantity: '4', 
          image: 'https://www.pacificessences.com/image/cache/data/product/main/pacific-essences-citrine-01-600x600.jpg'
        },
        {
          type: 'Tourmaline', 
          quantity: '12', 
          image: 'https://cdn.irocks.com/storage/media/59263/TOURMALINE-PAPROCK-122MM-JB015-5.jpg'
        }
      ]);
    });
};
