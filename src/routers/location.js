const express = require('express');
const Location = require('../models/location');

const router = new express.Router();

router.get('/location', async (req, res) => {
  const redis = require('redis');
  const redisUrl = 'redis://127.0.0.1:6379';
  const client = redis.createClient(redisUrl);
  const util = require('util');
  client.get = util.promisify(client.get);

  try {
    const cachedLocations = await client.get('all');

    if(cachedLocations){
      console.log('from cache');
      return res.send(JSON.parse(cachedLocations));
    }

    const locations = await Location.find();

    console.log('from db');
    res.send(locations);

    client.set('all', JSON.stringify(locations))

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
