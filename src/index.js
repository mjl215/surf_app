const express = require('express');
require('./db/mongoose');
const userRotuer = require('./routers/user');
const alertRouter = require('./routers/alert');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRotuer);
app.use(alertRouter);


app.listen(port, () => {
  console.log('Server is up on port ' + port)
});