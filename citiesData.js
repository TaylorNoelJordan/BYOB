let cities = [
    {
        name: 'Rome',
        population: 4355725,
        elevation: 69,
        country_name: 'Italy'
    },
    {
        name: 'Florence',
        population: 380948,
        elevation: 160,
        country_name: 'Italy'
    },
    {
        name: 'Barcelona',
        population: 1620343,
        elevation: 39,
        country_name: 'Spain'
    },
    {
        name: 'Sevilla',
        population: 688711,
        elevation: 23,
        country_name: 'Spain'
    },
    {
        name: 'Vejer de la Frontera',
        population: 12739,
        elevation: 200,
        country_name: 'Spain'
    },
    {
        name: 'Berlin',
        population: 6004857,
        elevation: 112,
        country_name: 'Germany'
    },
    {
        name: 'Munich',
        population: 1456039,
        elevation: 1710,
        country_name: 'Germany'
    },
    {
        name: 'London',
        population: 8908081,
        elevation: 36,
        country_name: 'England'
    },
    {
        name: 'Liverpool',
        population: 491500,
        elevation: 230,
        country_name: 'England'
    },
    {
        name: 'Paris',
        population: 2140526,
        elevation: 115,
        country_name: 'France'
    },
    {
        name: 'Marseille',
        population: 855393,
        elevation: 91,
        country_name: 'France'
    },
    {
        name: 'Amsterdam',
        population: 1380872,
        elevation: -7,
        country_name: 'The Netherlands'
    },
    {
        name: 'Rotterdam',
        population: 635389,
        elevation: 0,
        country_name: 'The Netherlands'
    },
    {
        name: 'Brussels',
        population: 1191604,
        elevation: 43,
        country_name: 'Belgium'
    },
    {
        name: 'Bruges',
        population: 118284,
        elevation: 42,
        country_name: 'Belgium'
    },
    {
        name: 'Luxembourg City',
        population: 116323,
        elevation: 750,
        country_name: 'Luxembourg'
    },
    {
        name: 'Ettelbruck',
        population: 8700,
        elevation: 630,
        country_name: 'Luxembourg'
    },
    {
        name: 'Beijing',
        population: 21542000,
        elevation: 142,
        country_name: 'China'
    },
    {
        name: 'Shanghai',
        population: 26317104,
        elevation: 13,
        country_name: 'China'
    },
    {
        name: 'Phuket City',
        population: 75573,
        elevation: 1772,
        country_name: 'Thailand'
    },
    {
        name: 'Chiang Mai',
        population: 131091,
        elevation: 1017,
        country_name: 'Thailand'
    },
    {
        name: 'Phnom Penh',
        population: 2129371,
        elevation: 39,
        country_name: 'Cambodia'
    },
    {
        name: 'Sihanoukville',
        population: 89846,
        elevation: 45,
        country_name: 'Cambodia'
    },
    {
        name: 'George Town',
        population: 708127,
        elevation: 46,
        country_name: 'Malaysia'
    },
    {
        name: 'Kuching',
        population: 325132,
        elevation: 26,
        country_name: 'Malaysia'
    },
    {
        name: 'Ubud',
        population: 74320,
        elevation: 688,
        country_name: 'Indonesia'
    },
    {
        name: 'Jakarta',
        population: 10075310,
        elevation: 26,
        country_name: 'Indonesia'
    },
    {
        name: 'Pape\'ete',
        population: 26926,
        elevation: 0,
        country_name: 'French Polynesia'
    },
    {
        name: 'Faa\'a',
        population: 29506,
        elevation: 0,
        country_name: 'French Polynesia'
    },
    {
        name: 'Tulum',
        population: 18233,
        elevation: 39,
        country_name: 'Mexico'
    },
    {
        name: 'Cancun',
        population: 743626,
        elevation: 30,
        country_name: 'Mexico'
    },
    {
        name: 'Toronto',
        population: 2731571,
        elevation: 251,
        country_name: 'Canada'
    },
    {
        name: 'Vancouver',
        population: 631486,
        elevation: 501,
        country_name: 'Canada'
    },
    {
        name: 'Lima',
        population: 8852000,
        elevation: 2545,
        country_name: 'Peru'
    },
    {
        name: 'Cusco',
        population: 428450,
        elevation: 11152,
        country_name: 'Peru'
    },
    {
        name: 'Antigua',
        population: 45669,
        elevation: 5029,
        country_name: 'Guatemala'
    },
    {
        name: 'Quetzaltenango',
        population: 792530,
        elevation: 7640,
        country_name: 'Guatemala'
    },
    {
        name: 'Nassau',
        population: 274400,
        elevation: 0,
        country_name: 'The Bahamas'
    },
    {
        name: 'Freeport',
        population: 26914,
        elevation: 30,
        country_name: 'The Bahamas'
    },
    {
        name: 'Kingston',
        population: 662426,
        elevation: 30,
        country_name: 'Jamaica'
    },
    {
        name: '',
        population: 0,
        elevation: 0,
        country_name: 'Australia'
    },
    {
        name: 'Montego Bay',
        population: 110115,
        elevation: 646,
        country_name: 'Australia'
    },
    {
        name: 'Fez',
        population: 1412072,
        elevation: 1350,
        country_name: 'Morocco'
    },
    {
        name: 'Tangiers',
        population: 947952,
        elevation: 750,
        country_name: 'Morocco'
    },
    {
        name: 'Nairobi',
        population: 4000000,
        elevation: 5450,
        country_name: 'Kenya'
    },
    {
        name: 'Mombasa',
        population: 1500000,
        elevation: 160,
        country_name: 'Kenya'
    },
    {
        name: 'New Delhi',
        population: 142004,
        elevation: 709,
        country_name: 'India'
    },
    {
        name: 'Mumbai',
        population: 12442373,
        elevation: 46,
        country_name: 'India'
    },
    {
        name: 'Auckland',
        population: 1628900,
        elevation: 643,
        country_name: 'New Zealand'
    },
    {
        name: 'Queenstown',
        population: 15850,
        elevation: 1020,
        country_name: 'New Zealand'
    },
    {
        name: 'Bodden Town',
        population: 10341,
        elevation: 30,
        country_name: 'The Cayman Islands'
    },
    {
        name: 'East End',
        population: 1369,
        elevation: 60,
        country_name: 'The Cayman Islands'
    },
    {
        name: 'Puerto Plata',
        population: 286558,
        elevation: 26,
        country_name: 'Dominican Republic'
    },
    {
        name: 'Santo Domingo',
        population: 965040,
        elevation: 46,
        country_name: 'Dominican Republic'
    },
    {
        name: 'Hanoi',
        population: 7781631,
        elevation: 32,
        country_name: 'Vietnam'
    },
    {
        name: 'Hoi An',
        population: 152160,
        elevation: 72,
        country_name: 'Vietnam'
    },
    {
        name: 'Kyoto',
        population: 1475183,
        elevation: 3186,
        country_name: 'Japan'
    },
    {
        name: 'Tokyo',
        population: 13929286,
        elevation: 130,
        country_name: 'Japan'
    },
    {
        name: 'Giza',
        population: 8800000,
        elevation: 62,
        country_name: 'Egypt'
    },
    {
        name: 'Alexandria',
        population: 5200000,
        elevation: 16,
        country_name: 'Egypt'
    },
    {
        name: 'Johannesburg',
        population: 957441,
        elevation: 5751,
        country_name: 'South Africa'
    },
    {
        name: 'Cape Town',
        population: 433688,
        elevation: 1590,
        country_name: 'South Africa'
    },
    {
        name: 'Kandy',
        population: 125400,
        elevation: 1600,
        country_name: 'Sri Lanka'
    },
    {
        name: 'Galle',
        population: 99478,
        elevation: 0,
        country_name: 'Sri Lanka'
    }
]