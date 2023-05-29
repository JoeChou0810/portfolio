const express = require('express');
const router = express.Router();
// GET /api/members
router.get('/', (req, res) => {
  if (req.session.member) {
    // req.session 有 member 的資料表示登入過
    res.json({ loggedIn: true, userInfo: req.session.member });
  } else {
    // req.session 裡 沒有 member 這個值 表示尚未登入
    res.status(400).json({ msg: '請先登入會員!!', loggedIn: false });
  }
});

module.exports = router;
