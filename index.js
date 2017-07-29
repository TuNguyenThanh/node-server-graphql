import express from 'express';
import DB from './Database';

const app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('Listen connect port ' + PORT);
});
