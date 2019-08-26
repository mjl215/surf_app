const express = require('express');
require('./db/mongoose');
require('./data/magicseaweed_api_call')

//import routers
const locationRouter= require("./routers/location")

const User = require('./models/user')
const Location = require('./models/location')


const app = express();
const port = process.env.PORT

app.use(express.json());

// Rotuers
app.use(locationRouter)




app.listen(port, () => {
  console.log('Server is up on port ' + port)
});