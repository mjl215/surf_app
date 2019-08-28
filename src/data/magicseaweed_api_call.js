const schedule = require('node-schedule');
const axios = require('axios');


const Location = require('../models/location');

const location_ids = [7, 909]
const api_key = process.env.MAGICSEAWEED_API_KEY

var j = schedule.scheduleJob('01 34 22 * * *', function(){

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
  }))
});


const upLoc = async (id, fullForecast) => {

  try {
    const location = await Location.findOne({ location_id: id})

    location.forecast = fullForecast
    await location.save()
    console.log(`location id ${id} updated`)

    getSwells(id, fullForecast)
  } catch (error) {
    console.log(`could not update location ${id} forecast:  `, error)
  }
  
}


const getSwells = async (id, forecast) => {
  
  const dayRatingArr = []
  //Improve this later
  let i;
  for (i = 0; i < forecast.length; i+=8) { 
    const dayRating = (forecast[i].solidRating + forecast[i+1].solidRating + forecast[i+2].solidRating + forecast[i+3].solidRating + forecast[i+4].solidRating + forecast[i+5].solidRating + forecast[i+6].solidRating + forecast[i+7].solidRating)/8
    dayRatingArr.push(dayRating)
  }
  
  const averageRating = (dayRatingArr.reduce((previous, current) => current += previous)) / dayRatingArr.length;
  const swell = dayRatingArr.filter((rating) => rating >= 3)
  

  const location = await Location.findOne({ location_id: id})

  if(swell.length >= 2){
    const newSwell = {
      swell: true,
      days: swell.length,
      averageRating
    }

    location.upcomingSwells = newSwell;
    location.save()

    console.log("new swell saved")

  } else {
    const newSwell = {
      swell: false,
      days: undefined,
      averageRating: averageRating
    }

    location.upcomingSwells = newSwell;
    location.save()

    console.log('no swell saved')
  }

  
}


