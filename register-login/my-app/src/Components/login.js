import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/global.scss';
import InputItem from './inputItem';

function Login() {
  const [member, setMember] = useState({
    account: '',
    password: '',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await axios.post('http://localhost:3001/api/auth/login', member);
    console.log(res.data);
  }

  // useEffect(() => {
  //   // 第二個參數為空陣列的時候 只會在 component 初始化時跑一次
  //   // 通常會把去跟後端要資料的動作寫在這裡

  //   //TODO: 解決閉包問題
  //   console.log('get userData.');
  //   async function getUser() {
  //     let res = await axios.get('http://localhost:3001/api/user');
  //     setUser(res.data);
  //   }
  //   console.log(user);
  //   getUser();
  // }, []);

  return (
    <>
      <form
        className="container form-control d-flex justify-content-center mt-5"
        action=""
        method=""
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h2 className="text-success fw-bold">會員登入</h2>
          <h5 className="mb-0 text-primary fw-bold">{InputItem[0].title}</h5>
          <input
            className="my-1"
            type={InputItem[0].type}
            name={InputItem[0].name}
            placeholder={InputItem[0].preSet}
            max={InputItem[0].max}
            min={InputItem[0].min}
            required={InputItem[0].req}
            onChange={handleChange}
          />
          <br />
          <h5 className="mb-0 text-primary fw-bold">{InputItem[1].title}</h5>
          <input
            className="my-1"
            type={InputItem[1].type}
            name={InputItem[1].name}
            placeholder={InputItem[1].preSet}
            max={InputItem[1].max}
            min={InputItem[1].min}
            required={InputItem[1].req}
            onChange={handleChange}
          />
          <br />
          <div className="pt-2 text-center">
            <button className="rounded bg-warning fw-bold" type="submit">
              登入
            </button>
          </div>
          <div className="d-flex justify-content-center py-1 text-center">
            <h6 className="text-danger fw-bold my-auto mx-1">還不是會員?</h6>
            <Link
              to="/register"
              className="fw-bold text-success  text-decoration-none"
            >
              點我註冊
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
