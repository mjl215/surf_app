const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  alertId: {
    type: String,
    required: true
  },
  alertType: {
    type: String,
    required: true
  },
  alertStatus: {
    type: String,
    required: true,
    lowercase: true
  },
  alertDecription: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  feeder: {
    type: String,
    required: true,
    trim: true
  },
  severity: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 1 || value > 3) {
        throw new Error('Severity must be between 1 and 3')
      }
    }
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true
  },
  customerEffected: {
    type: Number,
    default: 0
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'User'
  }
})

// alertSchema.pre('save', async function (next) {
//   const alert = this;

//   console.log('just before saving');

//   next();
// })

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;