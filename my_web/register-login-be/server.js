const express = require('express');
const app = express();

require('dotenv').config();
const pool = require('./utils/db');
const cors = require('cors');

app.use(express.json());
app.use(
  cors({
    // 為了讓browser 在 cors 的情況下還是送cookie
    // 必須把 credentials 設定成 true﹐設定成 true 就要設定 origin
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// session
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const path = require('path');
app.use(
  expressSession({
    // 告訴 express-session 套件 session 的儲存位置
    store: new FileStore({
      path: path.join(__dirname, '..', 'sessions'),
    }),
    secret: process.env.SESSION_SCRECT,
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  console.log('here is route `/` ');
  res.send('Here is route / ');
});

const authRouter = require('./routers/authRouter');
app.use('/api/auth', authRouter);

const memberRouter = require('./routers/memberRouter');
app.use('/api/members', memberRouter);

// 404
app.use((req, res) => {
  console.log('Here is 404');
  res.status(404).send('404 no found');
});

app.listen(3001, () => {
  console.log('Server running at port 3001.');
});
