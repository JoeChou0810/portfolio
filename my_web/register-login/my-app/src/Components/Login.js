import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Alert } from 'antd';
import axios from 'axios';
import InputItem from './Items/inputItem';
import '../Style/global.scss';

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [member, setMember] = useState({
    account: '',
    password: '',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post(
        'http://localhost:3001/api/auth/login',
        member,
        {
          withCredentials: true,
        }
      );
      alert(response.data.msg);
      navigate('/user');
    } catch (err) {
      alert(err.response.data.errors[0]['msg']);
    }
  }

  return (
    <>
      <form className="container" action="" method="" onSubmit={handleSubmit}>
        <div className="form-control text-center">
          <h2 className="text-primary-300 fw-bold mt-3 mb-0">會員登入</h2>
          <h5 className="mt-2 mb-0 text-info fw-bold">{InputItem[0].title}</h5>
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

          <h5 className="mt-2 mb-0 text-info fw-bold">{InputItem[1].title}</h5>
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
            <button
              className="rounded btn btn-primary-300 fw-bold"
              type="submit"
            >
              登入
            </button>
          </div>
          <div className="d-flex justify-content-center py-1  text-center">
            <h6 className="text-danger fw-bold my-auto mx-1">還不是會員?</h6>
            <Link
              to="/register"
              className="fw-bold text-primary-300  text-decoration-none"
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
