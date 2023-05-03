require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

const dogs = [
  { dogName: 'figo' },
  { dogName: 'pippa' },
  { dogName: 'henry' },
  { dogName: 'lotti' }
];

app.get('/getDogs', (req, res) => {
  // getAll
  //   .then((dogs) => {
  //     console.log(dogs);
  //     res.send(dogs);
  //   })
  //   .catch((err) => {
  //     console.log('there was an error getting dogs');
  //   });
  res.send(dogs);
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
