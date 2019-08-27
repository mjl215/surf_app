const mongoose = require('mongoose');

const Location = mongoose.model('Location', {
  location_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  skillLevel: {
    type: String,
    required: true
  },
  continent: {
    type: String,
  },
  country: {
    type: String,
  },
  upcomingSwells:[{
    swell: {
      type: Boolean,
      required: true
    },
    days: {
      type: Number
    },
    averageRating: {
      type: Number
    }
  }],
  forecast: [{
    timestamp: {
      type: Number,
      required: true
    }, 
    localTimestamp: {
      type: Number,
      required: true
    },
    solidRating: {
      type: Number,
      required: true
    },
    minBreakingHeight: {
      type: Number,
      required: true
    },
    maxBreakingHeight: {
      type: Number,
      required: true
    },
    probability: {
      type: String,
      required: true
    },
    swell: [{
      height: {
        type: Number,
        required: true
      },
      period: {
        type: Number,
        required: true
      },
      direction: {
        type: Number,
        required: true
      },
      compassDirection: {
        type: String,
        required: true
      }
    }],
    wind: [{
      speed: {
        type: Number,
        required: true
      },
      direction: {
        type: Number,
        required: true
      },
      compassDirection: {
          type: String,
          required: true
      }
    }]
    
  }]

  
})


module.exports = Location
