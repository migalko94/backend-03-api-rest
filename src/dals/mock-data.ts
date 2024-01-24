import { ObjectId } from "mongodb";
import { House } from "./house/index.js";
import { User } from "./user/index.js";

export interface DB {
  users: User[];
  houses: House[];
}

export const db: DB = {
  users: [
    {
      _id: new ObjectId(),
      email: "user@email.com",
      password: "test",
      salt: "",
    },
    {
      _id: new ObjectId(),
      email: "user2@email.com",
      password: "test",
      salt: "",
    },
  ],
  houses: [
    {
      _id: "1",
      listing_url: "https://www.airbnb.com/rooms/10006546",
      name: "Ribeira Charming Duplex",
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
      space:
        "Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit.",
      description:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character. Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit. We are always available to help guests",
      neighborhood_overview:
        "In the neighborhood of the river, you can find several restaurants as varied flavors, but without forgetting the so traditional northern food. You can also find several bars and pubs to unwind after a day's visit to the magnificent Port. To enjoy the Douro River can board the boats that daily make the ride of six bridges. You can also embark towards Régua, Barca d'Alva, Pinhão, etc and enjoy the Douro Wine Region, World Heritage of Humanity. The Infante's house is a few meters and no doubt it deserves a visit. They abound grocery stores, bakeries, etc. to make your meals. Souvenir shop, wine cellars, etc. to bring some souvenirs.",
      notes:
        "Lose yourself in the narrow streets and staircases zone, have lunch in pubs and typical restaurants, and find the renovated cafes and shops in town. If you like exercise, rent a bicycle in the area and ride along the river to the sea, where it will enter beautiful beaches and terraces for everyone. The area is safe, find the bus stops 1min and metro line 5min. The bustling nightlife is a 10 min walk, where the streets are filled with people and entertainment for all. But Porto is much more than the historical center, here is modern museums, concert halls, clean and cared for beaches and surf all year round. Walk through the Ponte D. Luis and visit the different Caves of Port wine, where you will enjoy the famous port wine. Porto is a spoken city everywhere in the world as the best to be visited and savored by all ... natural beauty, culture, tradition, river, sea, beach, single people, typical food, and we are among those who best receive tourists, confirm! Come visit us and feel at ho",
      transit:
        "Transport: • Metro station and S. Bento railway 5min; • Bus stop a 50 meters; • Lift Guindais (Funicular) 50 meters; • Tuc Tuc-to get around the city; • Buses tourist; • Cycling through the marginal drive; • Cable car in Gaia, overlooking the Port (just cross the bridge).",
      access:
        'We are always available to help guests. The house is fully available to guests. We are always ready to assist guests. when possible we pick the guests at the airport.  This service transfer have a cost per person. We will also have service "meal at home" with a diverse menu and the taste of each. Enjoy the moment!',
      interaction: "Cot - 10 € / night Dog - € 7,5 / night",
      house_rules: "Make the house your home...",
      property_type: "House",
      room_type: "Entire home/apt",
      bed_type: "Real Bed",
      minimum_nights: "2",
      maximum_nights: "30",
      cancellation_policy: "moderate",
      last_scraped: {
        $date: "2019-02-16T05:00:00Z",
      },
      calendar_last_scraped: {
        $date: "2019-02-16T05:00:00Z",
      },
      first_review: {
        $date: "2016-01-03T05:00:00Z",
      },
      last_review: {
        $date: "2019-01-20T05:00:00Z",
      },
      accommodates: 8,
      bedrooms: 3,
      beds: 5,
      number_of_reviews: 51,
      bathrooms: {
        $numberDecimal: "1.0",
      },
      amenities: [
        "TV",
        "Cable TV",
        "Wifi",
        "Kitchen",
        "Paid parking off premises",
        "Smoking allowed",
        "Pets allowed",
        "Buzzer/wireless intercom",
        "Heating",
        "Family/kid friendly",
        "Washer",
        "First aid kit",
        "Fire extinguisher",
        "Essentials",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Pack ’n Play/travel crib",
        "Room-darkening shades",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Microwave",
        "Coffee maker",
        "Refrigerator",
        "Dishwasher",
        "Dishes and silverware",
        "Cooking basics",
        "Oven",
        "Stove",
        "Cleaning before checkout",
        "Waterfront",
      ],
      price: {
        $numberDecimal: "80.00",
      },
      security_deposit: {
        $numberDecimal: "200.00",
      },
      cleaning_fee: {
        $numberDecimal: "35.00",
      },
      extra_people: {
        $numberDecimal: "15.00",
      },
      guests_included: {
        $numberDecimal: "6",
      },
      weekly_price: {
        $numberDecimal: 1492.0,
      },
      monthly_price: {
        $numberDecimal: 4849.0,
      },
      images: {
        thumbnail_url: "",
        medium_url: "",
        picture_url:
          "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
        xl_picture_url: "",
      },
      host: {
        host_id: "51399391",
        host_url: "https://www.airbnb.com/users/show/51399391",
        host_name: "Ana&Gonçalo",
        host_location: "Porto, Porto District, Portugal",
        host_about:
          "Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!",
        host_response_time: "within an hour",
        host_thumbnail_url:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        host_picture_url:
          "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_x_medium",
        host_neighbourhood: "",
        host_response_rate: 100,
        host_is_superhost: false,
        host_has_profile_pic: true,
        host_identity_verified: true,
        host_listings_count: 3,
        host_total_listings_count: 3,
        host_verifications: [
          "email",
          "phone",
          "reviews",
          "jumio",
          "offline_government_id",
          "government_id",
        ],
      },
      address: {
        street: "Porto, Porto, Portugal",
        suburb: "",
        government_area: "Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória",
        market: "Porto",
        country: "Portugal",
        country_code: "PT",
        location: {
          type: "Point",
          coordinates: [-8.61308, 41.1413],
          is_location_exact: false,
        },
      },
      availability: {
        availability_30: 28,
        availability_60: 47,
        availability_90: 74,
        availability_365: 239,
      },
      review_scores: {
        review_scores_accuracy: 9,
        review_scores_cleanliness: 9,
        review_scores_checkin: 10,
        review_scores_communication: 10,
        review_scores_location: 10,
        review_scores_value: 9,
        review_scores_rating: 89,
      },
      reviews: [
        {
          _id: "1",
          date: new Date("2016-12-19T05:00:00Z"),
          listing_id: "10059872",
          reviewer_id: "5302612",
          reviewer_name: "Octavio",
          comments:
            "The host canceled this reservation 11 days before arrival. This is an automated posting.",
        },
        {
          _id: "2",
          date: new Date("2017-01-01T05:00:00Z"),

          listing_id: "10059872",
          reviewer_id: "48436743",
          reviewer_name: "Ross",
          comments:
            "Giovanni was very helpful and responsive to my questions. This is a great apartment that is very convenient for exploring Hong Kong.",
        },
        {
          _id: "3",
          date: new Date("2018-01-03T05:00:00Z"),

          listing_id: "10006546",
          reviewer_id: "51483096",
          reviewer_name: "Cátia",
          comments:
            "A casa da Ana e do Gonçalo foram o local escolhido para a passagem de ano com um grupo de amigos. Fomos super bem recebidos com uma grande simpatia e predisposição a ajudar com qualquer coisa que fosse necessário.\r\nA casa era ainda melhor do que parecia nas fotos, totalmente equipada, com mantas, aquecedor e tudo o que pudessemos precisar.\r\nA localização não podia ser melhor! Não há melhor do que acordar de manhã e ao virar da esquina estar a ribeira do Porto.",
        },
        {
          _id: "4",
          date: new Date("2019-02-14T05:00:00Z"),

          listing_id: "10006546",
          reviewer_id: "40031996",
          reviewer_name: "Théo",
          comments:
            "We are french's students, we traveled some days in Porto, this space was good and we can cooking easly. It was rainning so we eard every time the water fall to the ground in the street when we sleeping. But It was cool and or was well received by Ana et Gonçalo",
        },
        {
          _id: "5",
          date: new Date("2020-02-14T05:00:00Z"),

          listing_id: "10006546",
          reviewer_id: "40031996",
          reviewer_name: "Théo",
          comments:
            "We are french's students, we traveled some days in Porto, this space was good and we can cooking easly. It was rainning so we eard every time the water fall to the ground in the street when we sleeping. But It was cool and or was well received by Ana et Gonçalo",
        },
      ],
    },
    {
      _id: "2",
      listing_url: "https://www.airbnb.com/rooms/10009999",
      name: "Horto flat with small garden",
      summary:
        "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area.",
      space:
        "Lovely one bedroom + sofa-bed in the living room, perfect for two but fits up to four comfortably.  There´s a small outside garden with a shower There´s a well equipped open kitchen with both 110V / 220V wall plugs and one bathroom with shower, tub and even a sauna machine! All newly refurbished!",
      description:
        "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area. Lovely one bedroom + sofa-bed in the living room, perfect for two but fits up to four comfortably.  There´s a small outside garden with a shower There´s a well equipped open kitchen with both 110V / 220V wall plugs and one bathroom with shower, tub and even a sauna machine! All newly refurbished! I´ll be happy to help you with any doubts, tips or any other information needed during your stay. This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy, b",
      neighborhood_overview:
        "This charming ground floor flat is located in Horto, a quiet and bucolic neighborhood just next to the Botanical Garden, where most of the descendants of it´s first gardeners still live. You´ll be 30 minutes walk from waterfalls in the rainforest with easy hiking trails! There are nice bars and restaurants as well as basic facilities - pharmacy, bakery, small market - in the area.",
      notes:
        "There´s a table in the living room now, that does not show in the photos.",
      transit:
        "Easy access to transport (bus, taxi, car) and easy free parking around. Very close to Gávea, Leblon, Ipanema, Copacabana and Botafogo.",
      access: "",
      interaction:
        "I´ll be happy to help you with any doubts, tips or any other information needed during your stay.",
      house_rules:
        "I just hope the guests treat the space as they´re own, with respect to it as well as to my neighbours! Espero apenas que os hóspedes tratem o lugar com carinho e respeito aos vizinhos!",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      bed_type: "Real Bed",
      minimum_nights: "2",
      maximum_nights: "1125",
      cancellation_policy: "flexible",
      last_scraped: {
        $date: "2019-02-11T05:00:00Z",
      },
      calendar_last_scraped: {
        $date: "2019-02-11T05:00:00Z",
      },
      first_review: {
        $date: "2016-01-31T05:00:00Z",
      },
      last_review: {
        $date: "2016-01-31T05:00:00Z",
      },
      security_deposit: null,
      accommodates: 4,
      bedrooms: 1,
      beds: 2,
      number_of_reviews: 0,
      bathrooms: {
        $numberDecimal: "1.0",
      },
      amenities: [
        "Wifi",
        "Wheelchair accessible",
        "Kitchen",
        "Free parking on premises",
        "Smoking allowed",
        "Hot tub",
        "Buzzer/wireless intercom",
        "Family/kid friendly",
        "Washer",
        "First aid kit",
        "Essentials",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
      ],
      price: {
        $numberDecimal: "317.0",
      },
      weekly_price: {
        $numberDecimal: 1492.0,
      },
      monthly_price: {
        $numberDecimal: 4849.0,
      },
      cleaning_fee: {
        $numberDecimal: "187.0",
      },
      extra_people: {
        $numberDecimal: "0.0",
      },
      guests_included: {
        $numberDecimal: "1",
      },
      images: {
        thumbnail_url: "",
        medium_url: "",
        picture_url:
          "https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large",
        xl_picture_url: "",
      },
      host: {
        host_id: "1282196",
        host_response_rate: 1,
        host_url: "https://www.airbnb.com/users/show/1282196",
        host_name: "Ynaie",
        host_location: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
        host_about:
          "I am an artist and traveling is a major part of my life. I love treating visitors the way I like to be treated when I´m abroad and I'm usually renting my flat while I'm away. I can recommend some cool parties and nights out as well as advise on some hidden secrets of Rio’s nature!",
        host_response_time: "",
        host_thumbnail_url:
          "https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_small",
        host_picture_url:
          "https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg?aki_policy=profile_x_medium",
        host_neighbourhood: "Jardim Botânico",
        host_is_superhost: false,
        host_has_profile_pic: true,
        host_identity_verified: false,
        host_listings_count: 1,
        host_total_listings_count: 1,
        host_verifications: ["email", "phone", "facebook"],
      },
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
        suburb: "Jardim Botânico",
        government_area: "Jardim Botânico",
        market: "Rio De Janeiro",
        country: "Brazil",
        country_code: "BR",
        location: {
          type: "Point",
          coordinates: [-43.23074991429229, -22.966253551739655],
          is_location_exact: true,
        },
      },
      availability: {
        availability_30: 0,
        availability_60: 0,
        availability_90: 0,
        availability_365: 0,
      },
      review_scores: null,
      reviews: [
        {
          _id: "1",
          date: new Date("2011-12-19T05:00:00Z"),
          listing_id: "10059872",
          reviewer_id: "5302612",
          reviewer_name: "Octavio",
          comments:
            "The host canceled this reservation 11 days before arrival. This is an automated posting.",
        },
        {
          _id: "2",
          date: new Date("2012-01-01T05:00:00Z"),
          listing_id: "10059872",
          reviewer_id: "48436743",
          reviewer_name: "Ross",
          comments:
            "Giovanni was very helpful and responsive to my questions. This is a great apartment that is very convenient for exploring Hong Kong.",
        },
        {
          _id: "3",
          date: new Date("2013-03-27T04:00:00Z"),
          listing_id: "10059872",
          reviewer_id: "111288273",
          reviewer_name: "Christian",
          comments:
            "The host canceled this reservation 8 days before arrival. This is an automated posting.",
        },
        {
          _id: "4",
          date: new Date("2014-01-03T05:00:00Z"),

          listing_id: "10057826",
          reviewer_id: "22162519",
          reviewer_name: "Alex",
          comments:
            "I could not have found a better place to stay in Brooklyn. I have nothing but positive things to say about this place. Definitely recommend staying here and would stay again.",
        },
        {
          _id: "5",
          date: new Date("2015-07-24T04:00:00Z"),
          listing_id: "10057826",
          reviewer_id: "20282871",
          reviewer_name: "Dina",
          comments:
            "My husband, son and I were fortunate enough to have discovered the Henry Norman Hotel for our recent stay in Greenpoint Brooklyn. Even though we booked our room through Airbnb, we were welcome to all the amenities the hotel had to offer.  We were pleased from our arrival at the hotel, where the exterior was as pretty as the interior and greeted by Robert whose very pleasant demeanor was refreshing.  Each of the staff at the hotel were very professional and accommodating but Robert stood out from the rest.  I was unfortunate enough to have left my phone at a nearby shop after returning via the hotel shuttle, when notifying the front desk to see if I had left my phone in the back seat, Robert quickly responded with his assistance in searching for the item, then driving us immediately to the last location while he assured us he would be outside waiting so we would not have to walk back. I did in fact find my phone at that location (thanks to a good Samaritan) and Robert refused to take compensation for his kindness.  The only thing I would do differently on our next stay is to spend the extra for the room with the patio, as the view from the hotel is quite nice and the breezes up there were wonderful.  We not only will be back to visit the lovely hotel but will gladly recommend it to all who might be vising the Greenpoint area. ",
        },
      ],
    },
  ],
};
