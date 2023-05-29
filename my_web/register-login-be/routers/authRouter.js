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
  body('email').isEmail().withMessage('請輸入正確的email格式'),
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
router.post('/login', async (req, res) => {
  try {
    // 資料驗證
    let [members] = await pool.execute('SELECT * FROM user WHERE account=?', [
      req.body.account,
    ]);
    // 帳號是否註冊過
    if (members.length === 0) {
      // 不存在回覆401
      return res.status(401).json({
        errors: [
          {
            msg: '尚未註冊過的帳號!!',
            param: 'account',
          },
        ],
      });
    }
    console.log(members);
    // 如果存在，比對密碼
    let member = members[0]; // get hashed PWD
    let result = await argon2.verify(member.password, req.body.password);
    if (result === false) {
      // 密碼錯誤回覆前端401, early return
      return res.status(401).json({
        errors: [
          {
            msg: '帳號或密碼錯誤!!',
            param: 'password',
          },
        ],
      });
    }
    // 帳號存在且密碼正確
    // 設定要寫進 session 的內容
    let retMember = {
      id: member.id,
      account: member.account,
      email: member.email,
    };

    // 寫入 session
    req.session.member = retMember;

    res.json({
      msg: '登入成功!!',
      member: retMember,
    });
  } catch (err) {
    console.log('falied', err);
    res.json({
      msg: '登入失敗!!',
    });
  }
});
router.get('/logout', async (req, res) => {
  req.session.member = null;
  res.json({
    msg: '登出成功!!',
  });
});

module.exports = router;
