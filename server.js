/*eslint-disable*/
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/getMovieSchedule', async (req, res) => {
  try {
    const {query} = req.body;
    if(!query || !query.channel || !query.from || !query.to) {
      res
      .status(400)
      .send({
        error: "Bad request: No query found! Query should include 'channel', 'from', 'to' parameters."
      });
      return;
    }

    const {data} = await axios.get(`
      ${process.env.VUE_APP_MBC_API_URL}?channel=${query.channel}&from=${query.from}&to=${query.to}
    `);

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on: http://localhost:${port}`);
