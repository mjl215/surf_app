const express = require('express');
require('./db/mongoose');
require('./data/magicseaweed_api_call')

const path = require('path')

//import routers
const locationRouter= require("./routers/location")

const User = require('./models/user')
const Location = require('./models/location')


const app = express();
const port = process.env.PORT

app.use(express.json());


// serve static assets in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
// Rotuers
app.use(locationRouter)

app.get('/favicon.ico', (req, res) =>{
  res.sendStatus(200)
})


app.listen(port, () => {
  console.log('Server is up on port ' + port)
});