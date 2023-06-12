import React from 'react';
import { useState } from 'react';
import FooterItem from './Items/footerItem';
import '../Style/footer.scss';
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
      <div className="footer d-none d-lg-flex justify-content-between">
        {FooterItem.map((item, i) => {
          return (
            <ul key={i} className="list-unstyled row">
              <li>{item.title}</li>
              <li>{item.title}</li>
              <li>{item.title}</li>
              <li>{item.title}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
