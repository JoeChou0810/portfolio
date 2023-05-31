const InputItem = [
  {
    title: '會員帳號',
    type: 'text',
    name: 'account',
    preSet: '請填入帳號',
    max: '20',
    min: '4',
    req: true,
  },
  {
    title: '會員密碼',
    type: 'password',
    name: 'password',
    preSet: '請填入密碼',
    max: '20',
    min: '5',
    req: true,
  },
  {
    title: '確認密碼',
    type: 'password',
    name: 'rePassword',
    preSet: '請再次輸入密碼',
    max: '20',
    min: '5',
    req: true,
  },
  {
    title: 'E-mail',
    type: 'text',
    name: 'email',
    preSet: '請填入電子信箱',
    max: '',
    min: '',
    req: true,
  },
];
export default InputItem;
