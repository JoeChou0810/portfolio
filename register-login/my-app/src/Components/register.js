import React, { useState } from 'react';
import '../Style/global.scss';
import { Link, useNavigate } from 'react-router-dom';
import InputItem from './inputItem';

function Register() {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    account: '',
    password: '',
    rePassword: '',
    email: '',
  });

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/');
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
          <h2 className="text-success fw-bold">會員註冊</h2>
          {InputItem.map((it, i) => {
            return (
              <div key={i} className="">
                <h5 className="mb-0 text-primary fw-bold">{it.title}</h5>
                <input
                  className="my-1"
                  type={it.type}
                  name={it.name}
                  placeholder={it.preSet}
                  max={it.max}
                  min={it.min}
                  required={it.req}
                  onChange={handleChange}
                />
              </div>
            );
          })}
          <div className="pt-2 text-center">
            <button className="rounded bg-warning fw-bold" type="submit">
              註冊
            </button>
          </div>
          <div className="d-flex justify-content-center py-1 text-center">
            <h6 className="text-success fw-bold my-auto mx-1 ">已經是會員?</h6>
            <Link to="/" className="fw-bold text-primary text-decoration-none">
              點此登入
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
