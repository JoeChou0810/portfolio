import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FooterItem from './Items/footerItem';
import '../Style/footer.scss';
function Footer() {
  const location = useLocation();
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {FooterItem.map((item, i) => {
          return (
            <div key={i} className="item">
              <div
                className="title"
                onClick={() => {
                  toggle(i);
                }}
              >
                <h2>{item.title}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
