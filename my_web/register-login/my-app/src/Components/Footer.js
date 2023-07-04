import React from 'react';
import { useState } from 'react';
import FooterItem from './Items/footerItem';
import '../Style/footer.scss';
import { Link } from 'react-router-dom';
function Footer() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion d-lg-none">
        {FooterItem.map((item, i) => {
          return (
            <div key={i} className="item">
              <div
                className="title"
                onClick={() => {
                  toggle(i);
                }}
              >
                <h2 className="fw-bold">{item.title}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer d-none d-lg-flex row justify-content-center">
        {FooterItem.map((item, i) => {
          return (
            <div key={i} className="col-2 d-flex row text-start">
              <h4 className="fw-bold mt-4">{item.title}</h4>
              {item.subItem.map((subItem, i) => (
                <Link
                  to={subItem.to}
                  key={i}
                  className="mt-2 text-info text-decoration-none"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          );
        })}
        <div className="mt-2 row justify-content-center align-items-center">
          <div className="col">
            <p>&copy; 2023 Joe Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
