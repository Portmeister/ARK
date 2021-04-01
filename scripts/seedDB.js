const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/arklist"
);

const arkSeed = [
  {
    userFirst: "John",
    userLast: "Carter",
    userPhone: 4326890425,
    userEmail: "johncarter@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Need trash taken out on Monday & Thursday",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Chelsea",
    userLast: "Abalos",
    userPhone: 4326873313,
    userEmail: "chelseaabalos@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Need a ride to the grocery store on Friday",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Charles",
    userLast: "Boyd",
    userPhone: 5128884314,
    userEmail: "charlesboyd@gmail.com",
    userLocation: "Austin, TX",
    serviceSynopsis: "Need help changing air filters in my home this month",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Tyler",
    userLast: "Jones",
    userPhone: 5124446615,
    userEmail: "tylerjones@gmail.com",
    userLocation: "Austin, TX",
    serviceSynopsis: "Need help watching kids during the week",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Ruben",
    userLast: "Carrasco",
    userPhone: 4324188888,
    userEmail: "rubencarrasco@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Need help getting on roof to clean out gutters",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Stacy",
    userLast: "Fern",
    userPhone: 5129998226,
    userEmail: "stacyfern@gmail.com",
    userLocation: "Austin, TX",
    serviceSynopsis: "Need help fixing some sprinkler heads in my front yard",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Sally",
    userLast: "Grotto",
    userPhone: 4327724246,
    userEmail: "sallygrotto@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Need help getting to and from the Dr.'s office Tuesday",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Julie",
    userLast: "Young",
    userPhone: 4328894499,
    userEmail: "julieyoung@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Looking for help fixing my car's engine",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Kelly",
    userLast: "Burns",
    userPhone: 8172222246,
    userEmail: "kellyburns@gmail.com",
    userLocation: "Dallas, TX",
    serviceSynopsis: "Need help getting to and from the grocery store ASAP",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Bobby",
    userLast: "Bell",
    userPhone: 9728494191,
    userEmail: "bobbybell@gmail.com",
    userLocation: "Arlington, TX",
    serviceSynopsis: "Need help with delivering groceries to the elderly",
    completed: false,
    date: new Date(Date.now())
  }
];

db.Ark
  .remove({})
  .then(() => db.Ark.collection.insertMany(arkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
