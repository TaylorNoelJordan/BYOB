
exports.seed = function(knex) {

  return knex('crystal').del()
    .then(function () {

      return knex('crystal').insert([
        {
          type: 'Selenite', 
          quantity: 30, 
          image: 'https://www.feelcrystals.com.au/wp-content/uploads/2015/06/Selenite-Specimen-12.jpg'
        },
        {
          type: 'Aventurine', 
          quantity: 27, 
          image: 'http://nasvete.com/wp-content/uploads/2015/01/Sparkling-with-stars-Aventurine-3.jpg'
        },
        {
          type: 'Citrine', 
          quantity: 4, 
          image: 'https://www.pacificessences.com/image/cache/data/product/main/pacific-essences-citrine-01-600x600.jpg'
        },
        {
          type: 'Tourmaline', 
          quantity: 12, 
          image: 'https://cdn.irocks.com/storage/media/59263/TOURMALINE-PAPROCK-122MM-JB015-5.jpg'
        },
        {
          type: 'Agate',
          quantity: 37,
          image: 'https://3.bp.blogspot.com/-slaYXS5NNcE/WAYMhKrvb8I/AAAAAAAAJ2g/URKCnq8IZMMqkr5cM7rB_v1Q5gKLWylAgCLcB/s1600/Thunder%2Begg%2Bagate%2Bcookies%2Bmonester%2B1.jpg'
        },
        {
          type: 'Rose Quartz',
          quantity: 81,
          image: 'https://geology.com/gemstones/rose-quartz/rose-quartz-irocks.jpg'
        },
        {
          type: 'Smoky Quartz',
          quantity: 72,
          image: 'https://www.feelcrystals.com.au/wp-content/uploads/2017/07/Smoky-Quartz-Specimen-1-2.jpg'
        },
        {
          type: 'Lapis Lazuli',
          quantity: 16,
          image: 'https://www.pacificessences.com/image/cache/data/product/main/pacific-essences-lapis-lazuli-01-600x600.jpg'
        },
        {
          type: 'Kyanite',
          quantity: 26,
          image: 'https://assets2.fossilera.com/sp/157499/kyanite/kyanite-quartz.jpg'
        },
        {
          type: 'Celestite',
          quantity: 39,
          image: 'https://www.feelcrystals.com.au/wp-content/uploads/Celestite-Specimen-P1420887.jpg'
        },
        {
          type: 'Tiger\'s Eye',
          quantity: 41,
          image: 'https://eluneblue.com/wp-content/uploads/2017/02/Tigers-Eye-Tumbled-Tigers-Eye-Meaning-Elune-Blue-2.jpg'
        },
        {
          type: 'Malachite',
          quantity: 12,
          image: 'https://assets0.fossilera.com/sp/127364/malachite/malachite.jpg'
        },
        {
          type: 'Pyrite',
          quantity: 18,
          image: 'https://www.feelcrystals.com.au/wp-content/uploads/2015/06/Pyrite-Cube-Cluster-1.jpg'
        },
        {
          type: 'Lava Rock',
          quantity: 112,
          image: 'https://i.pinimg.com/originals/3f/c1/bf/3fc1bfba4104c85762630d9f139425fd.jpg'
        },
        {
          type: 'Hematite',
          quantity: 56,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WLA_hmns_Hematite.jpg/260px-WLA_hmns_Hematite.jpg'
        },
        {
          type: 'Carnelian',
          quantity: 70,
          image: 'https://crystal-information.com/wp-content/uploads/bfi_thumb/carnelian-icon-mxz3luutocsqkup913vs8ly3qj0uxo8nx0x260rhlc.jpg' 
        },
        {
          type: 'Amethyst',
          quantity: 14,
          image: 'http://cdn.shopify.com/s/files/1/0071/5666/2336/products/amethyst-crystal-dream-scepter-from-uruguay-crystals-featured-new-arrivals-druze-point-basarti-store_540_1200x1200.jpg?v=1550683823'
        },
        {
          type: 'Larimar',
          quantity: 30,
          image: 'http://minerals-stones.com/752-tm_large_default/larimar.jpg'  
        },
        {
          type: 'Opalite',
          quantity: 35,
          image: 'https://df2sm3urulav.cloudfront.net/tenants/gr/cache/uploads/images/805000-809999/808788/5baadafcef789_260x208.jpg'
        },
        {
          type: 'Moon Stone',
          quantity: 11,
          image: 'https://df2sm3urulav.cloudfront.net/tenants/gr/uploads/images/365000-369999/369954/369954_1371245282.jpg' 
        },
        {
          type: 'Jade',
          quantity: 19,
          image: 'https://crystal-information.com/wp-content/uploads/bfi_thumb/jade-icon-mxz3l2nnzbq4wju7lroz5t29wyvuir4pt5chrpxas0.jpg'
        },
        {
          type: 'Fluorite',
          quantity: 30,
          image: 'https://assets0.fossilera.com/sp/155500/illinois-cave-in-rock/fluorite.jpg'
        },
        {
          type: 'Obsidian',
          quantity: 29,
          image: 'https://rukminim1.flixcart.com/image/832/832/jnkmykw0/showpiece-figurine/h/q/s/al23597-aldomin-original-imafa8madechjugf.jpeg?q=70'
        },
        {
          type: 'Aragonite',
          quantity: 78,
          image:'https://cdn.shopify.com/s/files/1/0950/7062/products/il_fullxfull.1000492336_asrq_870.jpg?v=1542223874'
        },
        {
          type: 'Calcite',
          quantity: 24,
          image: 'https://assets0.fossilera.com/sp/197539/calcite/calcite.jpg'
        },
        {
          type: 'Desert Rose',
          quantity: 38,
          image: 'http://cdn.shopify.com/s/files/1/2584/7914/products/desertrosecrystals_grande.jpg?v=1517799169' 
        },
        {
          type: 'Amazonite',
          quantity: 33,
          image: 'https://assets1.fossilera.com/sp/174374/amazonite/microcline-var-amazonite.jpg'  
        },
        {
          type: 'Garnet',
          quantity: 22,
          image: 'https://images-na.ssl-images-amazon.com/images/I/411JMuZRJXL.jpg'
        },
        {
          type: 'Labradorite',
          quantity: 37,
          image: 'https://jeannieirwin.files.wordpress.com/2013/01/labradorite.jpg'
        },
        {
          type: 'Sodalite',
          quantity: 44,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Sodalith_-_Rohstein.jpg'
        },
        {
          type: 'Jasper',
          quantity: 65,
          image: 'https://eluneblue.com/wp-content/uploads/2016/11/Red-Jasper-Sphere-Red-Jasper-Meaning-and-Uses-Elune-Blue.jpg'  
        },
        {
          type: 'Dolomite',
          quantity: 41,
          image: 'https://assets0.fossilera.com/sp/217589/dolomite/dolomite.jpg' 
        }
      ]);
    });
};
