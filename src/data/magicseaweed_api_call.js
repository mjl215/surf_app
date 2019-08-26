const schedule = require('node-schedule');
const axios = require('axios');

const Location = require('../models/location')

const location_ids = [7, 909]

const api_key = process.env.MAGICSEAWEED_API_KEY

var j = schedule.scheduleJob('00 08 22 * * *', function(){

  location_ids.forEach((id => {
    axios.get(`http://magicseaweed.com/api/${api_key}/forecast/?spot_id=${id}`).then((res) => {

    const fullForecast = []

    res.data.forEach((data) => {

      const {timestamp, localTimestamp, solidRating, swell, wind} = data

      const forecast = {
        timestamp: timestamp,
        localTimestamp: localTimestamp,
        solidRating: solidRating,
        minBreakingHeight: swell.minBreakingHeight,
        maxBreakingHeight: swell.maxBreakingHeight,
        probability: swell.probability,
        swell: {
          height: swell.components.combined.height,
          period: swell.components.combined.period,
          direction: swell.components.combined.direction,
          compassDirection: swell.components.combined.compassDirection
        },
        wind: {
          speed: wind.speed,
          direction: wind.direction,
          compassDirection: wind.compassDirection
        }
      }

      fullForecast.push(forecast)

    })    
    
    upLoc(id, fullForecast)

        }).catch((e) => {
          console.log("could not get data: ", e)
        })
      }
    )
  )
});


const upLoc = async (id, forecast) => {

  try {
    const location = await Location.findOne({ location_id: id})

    location.forecast = forecast
    location.save()

    console.log(`location id ${id} updated`)
  } catch (error) {
    console.log(`could not update location ${id} forecast:  `, error)
  }
  
}


