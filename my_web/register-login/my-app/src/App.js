import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import User from './Components/User';
import Register from './Components/Register';
import NotFound from './Components/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthContext } from './Components/AuthContext';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/members', {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoggedIn(res.data.loggedIn);
        if (res.data.userInfo) {
          setUserInfo(res.data.userInfo);
        }
      })
      .catch((err) => {
        alert('Welcome my web.');
      });
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, userInfo, setUserInfo }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
