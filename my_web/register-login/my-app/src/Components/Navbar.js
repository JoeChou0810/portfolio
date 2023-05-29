import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';

import BarItem from './barItem';
import '../Style/global.scss';

const Navbar = () => {
  const navigate = useNavigate();
  async function handleLogout() {
    let response = await axios.get('http://localhost:3001/api/auth/logout', {
      withCredentials: true,
    });
    setIsLoggedIn(false);
    alert(response.data.msg);
    navigate('/');
  }

  const { userInfo, setUserInfo, isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <nav className="bg-info d-flex justify-content-center py-3">
      <div className="fs-4 fw-bold">
        {BarItem.map((it, i) => {
          return (
            <Link key={i} to={it.to} className={it.class}>
              {it.name}
            </Link>
          );
        })}
        <Link
          to="/login"
          className={
            isLoggedIn ? 'd-none' : 'linkSty text-decoration-none mx-3'
          }
        >
          登入
        </Link>
        <Link
          className={
            isLoggedIn ? 'linkSty text-decoration-none mx-3' : 'd-none'
          }
          onClick={handleLogout}
        >
          登出
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
