const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const database = require("./models");
const OpenAI = require('openai-api-node');
const OPEN_AI_API_KEY = require('./config/gpt3');
const openaikey = OPEN_AI_API_KEY.AI_API;
const prompt = require('./gpt3-prompt')
const NETLIFY_API = require('../.netlify/functions/api')
let dbURL;
//make this work to deploy website securely on Netlify
// fetch(NETLIFY_API)
// .then(response => response.json())
// .then(json => {
//     dbURL = json.db_url;
// })
// .catch(err =>{
//   console.log("Error connecting to Netlify: ", err)
// })


//talk to OpenAI *keep it commented out to save token quota

// var openai = new OpenAI(openaikey)
// openai.CompletionsCreate(prompt.input, max_tokes = 20, engine='davinci')
//   .then(function (data) {
//     console.log('Connected to GPT3 API\n')
//     console.log(data, '\n')
//     console.log('GPT 3 response is: ', data.choices.map(a => a.text))

//   })
//   .catch(function (err) {
//     console.log('Error connecting to GTP3 API\n', err)
//   })

//testing array access
// // const array = {
// //   id: 'cmpl-QUwTH3CxNVVgrcjiH89Ece7j',
// //   object: 'text_completion',
// //   created: 1607509175,
// //   model: 'davinci:2020-05-03',
// //   choices: [
// //     {
// //       text: ': go. It might',
// //       index: 0,
// //       logprobs: null,
// //       finish_reason: 'length'
// //     }
// //   ]
// // }

// console.log(array.choices.map(a => a.text))

var corsOptions = {
  origin: "http://localhost:8081"
};

database.mongoose.connect(database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to interactive-storyteller application." });
});




// set port, listen for requests
require("./routes/post.route")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
