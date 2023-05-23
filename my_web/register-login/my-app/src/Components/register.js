import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputItem from './inputItem';
import '../Style/global.scss';

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (member.password !== member.rePassword) {
      alert('前後密碼不一致﹐請重新填寫');
      return;
    }
    try {
      let response = await axios.post(
        'http://localhost:3001/api/auth/register',
        member
      );
      console.log(response.data);
      alert('註冊成功!!');
      navigate('/login');
    } catch (e) {
      alert(e.response.data.errors[0]['msg']);
    }
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
            <Link
              to="/login"
              className="fw-bold text-primary text-decoration-none"
            >
              點此登入
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
