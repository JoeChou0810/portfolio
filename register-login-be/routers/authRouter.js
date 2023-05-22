const express = require('express');
const router = express.Router();
const pool = require('../utils/db');
const { body, validationResult } = require('express-validator');
const argon2 = require('argon2');

// register
const registerRules = [
  body('account').isLength({ min: 5 }).withMessage('帳號長度至少為5'),
  body('password').isLength({ min: 5 }).withMessage('密碼長度至少為5'),
  body('rePassword')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('前後密碼不符合'),
  body('email').isEmail().withMessage('請輸入正確格式'),
];

router.post('/register', registerRules, async (req, res) => {
  try {
    const validateResult = validationResult(req);
    // 檢查註冊表單資訊
    if (!validateResult.isEmpty()) {
      return res.status(400).json({ errors: validateResult.array() });
    }

    // email是否註冊過
    let [members] = await pool.execute('SELECT * FROM user WHERE email=?', [
      req.body.email,
    ]);
    if (members.length > 0) {
      return res.status(400).json({
        errors: [
          {
            msg: '這個email已經註冊過!!',
            param: 'email',
          },
        ],
      });
    }
    // 雜湊密碼
    const hashedPassword = await argon2.hash(req.body.password);
    // 寫入資料庫
    let result = await pool.execute(
      'INSERT INTO user (account, password, email) VALUES (?, ?, ?)',
      [req.body.account, hashedPassword, req.body.email]
    );
    console.log('register: insert to db', result);

    res.json({});
  } catch (err) {
    console.log('failed', err);
    res.json('驗證失敗');
  }
});

module.exports = router;
