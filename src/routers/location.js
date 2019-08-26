const express = require('express');
const Location = require('../models/location');

const router = new express.Router();

router.get('/location', async (req, res) => {

  try {
    const locations = await Location.find();

    res.send(locations)


  } catch (error) {
    res.status(500).send();
  }
})


router.post('/location', (req, res) => {
  const location = new Location(req.body)

  location.save().then(() => {
    res.send(location)
  }).catch(e => console.log(e))
})

module.exports = router;
