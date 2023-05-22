const express = require('express');
const app = express();

require('dotenv').config();
const pool = require('./utils/db');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log('here is route `/` ');
  res.send('Here is route / ');
});

const authRouter = require('./routers/authRouter');
app.use('/api/auth', authRouter);

// 404
app.use((req, res) => {
  console.log('Here is 404');
  res.send('404 no found');
});

app.listen(3001, () => {
  console.log('Server running at port 3001.');
});
