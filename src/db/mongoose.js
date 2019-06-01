const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/report-test2', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});