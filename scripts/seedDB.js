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
    userPhone: 432-689-0425,
    userEmail: "johncarter@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Need trash taken out on Monday & Thursday",
    providerSynopsis: "",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Chelsea",
    userLast: "Abalos",
    userPhone: 432-687-3313,
    userEmail: "chelseaabalos@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Need a ride to the grocery store on Friday",
    providerSynopsis: "",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Charles",
    userLast: "Boyd",
    userPhone: 512-888-4314,
    userEmail: "charlesboyd@gmail.com",
    userLocation: "Austin, TX",
    serviceSynopsis: "Need help changing air filters in my home this month",
    providerSynopsis: "",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Tyler",
    userLast: "Jones",
    userPhone: 512-444-6615,
    userEmail: "tylerjones@gmail.com",
    userLocation: "Austin, TX",
    serviceSynopsis: "",
    providerSynopsis: "I am handy around the house and can help with any odd jobs you may have a need for",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Ruben",
    userLast: "Carrasco",
    userPhone: 432-418-8888,
    userEmail: "rubencarrasco@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "",
    providerSynopsis: "I have a bunch of free time and am looking to fill it with service to community. Let me know how I can help out",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Stacy",
    userLast: "Fern",
    userPhone: 512-999-8226,
    userEmail: "stacyfern@gmail.com",
    userLocation: "Austin, TX",
    serviceSynopsis: "Need help fixing some sprinkler heads in my front yard",
    providerSynopsis: "",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Sally",
    userLast: "Grotto",
    userPhone: 432-772-4246,
    userEmail: "sallygrotto@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "Need help getting to and from the Dr.'s office Tuesday",
    providerSynopsis: "",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Julie",
    userLast: "Young",
    userPhone: 432-889-4499,
    userEmail: "julieyoung@gmail.com",
    userLocation: "Midland, TX",
    serviceSynopsis: "",
    providerSynopsis: "Glad to help out with rides whenever possible",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Kelly",
    userLast: "Burns",
    userPhone: 817-222-2246,
    userEmail: "kellyburns@gmail.com",
    userLocation: "Dallas, TX",
    serviceSynopsis: "Need help getting to and from the grocery store ASAP",
    providerSynopsis: "",
    completed: false,
    date: new Date(Date.now())
  },
  {
    userFirst: "Bobby",
    userLast: "Bell",
    userPhone: 972-849-4191,
    userEmail: "bobbybell@gmail.com",
    userLocation: "Arlington, TX",
    serviceSynopsis: "",
    providerSynopsis: "Glad to help out with needs in the greater DFW area",
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
