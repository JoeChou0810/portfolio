import React, { useState } from 'react';
import '../Style/global.scss';
import { Link, useNavigate } from 'react-router-dom';
import InputItem from './inputItem';

function Login() {
  const [member, setMember] = useState({
    account: '',
    password: '',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(member);
  }
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
              to="/r"
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
