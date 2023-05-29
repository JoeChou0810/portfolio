import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';
import axios from 'axios';
function User() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, isLoggedIn, setIsLoggedIn } = useAuth();

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
        alert(err.response.data.msg);
        navigate('/login');
      });
  }, [isLoggedIn]);

  return (
    <div className="container mt-1">
      <div className={isLoggedIn ? 'd-none' : 'form-control mt-1'}>
        <h2 className={isLoggedIn ? 'd-none' : 'text-info-dark fw-bold pt-2'}>
          請先登入會員!!
        </h2>
      </div>

      {/* login */}
      <div className={isLoggedIn ? 'form-control mt-1' : 'd-none'}>
        <div className="d-flex align-items-center">
          <h2 className="text-info-dark pt-2 fw-bold">歡迎來到 Joe 的專案,</h2>
          <h2 className="px-3">{userInfo.account}</h2>
        </div>
        <h2 className="text-primary-300">More about JoeChou.</h2>

        <div className="d-flex align-items-center mt-2">
          <i className="fa-brands fa-github fs-2  text-info"></i>
          <Link
            to="https://github.com/JoeChou0810?tab=repositories"
            className="text-decoration-none"
          >
            <h4 className="text-info mb-0 mx-2">Github</h4>
          </Link>
        </div>

        <div className="d-flex align-items-center mt-2">
          <i className="fa-solid fa-copyright fs-2 text-info"></i>
          <Link
            to="https://www.cakeresume.com/me/subaru081012"
            className="text-decoration-none"
          >
            <h4 className="text-info mb-0 mx-2">Cakeresume</h4>
          </Link>
        </div>

        <div className="d-flex align-items-center mt-2">
          <i className="fa-brands fa-square-facebook fs-2 mx-1 text-info"></i>
          <Link
            to="https://www.facebook.com/profile.php?id=100001614759576"
            className="text-decoration-none"
          >
            <h4 className="text-info mb-0 mx-2">Facebook</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
