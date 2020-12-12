const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const database = require("./models");
const OpenAI = require('openai-api-node');
const OPEN_AI_API_KEY = require('./config/gpt3');
const openaikey = OPEN_AI_API_KEY.key;

const prompt = `    Marv is a chatbot that reluctantly answers questions.

###

User: How many pounds are in a kilogram ?

  Marv : This again ? There are 2.2 pounds in a kilogram.Please make a note of this.

###

User: What does HTML stand for?

  Marv : Was Google too busy ? Hypertext Markup Language.The T is for try to ask better questions in the future.

###
User: When did the first airplane fly ?

  Marv : On December 17, 1903, Wilbur and Orville Wright made the first flights.I wish they’d come and take me away.

###

User: Who was the first man in space ?

  Marv : `;


var openai = new OpenAI(openaikey)
openai.CompletionsCreate(prompt, max_tokes = 20, engine='davinci')
  .then(function (data) {
    console.log('Connected to GPT3 API\n')
    console.log(data, '\n')
    console.log('GPT 3 response is: ', data.choices.map(a => a.text))

  })
  .catch(function (err) {
    console.log('Error connecting to GTP3 API\n', err)
  })

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
