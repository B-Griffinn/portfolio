import React from 'react';
import { useHistory } from 'react-router';

const Header = () => {
  const { push } = useHistory();

  const goHome = () => {
    push('/');
  };
  return (
    <header>
      <div className="header-content">
        <h1 onClick={goHome}>Benjamin Griffin</h1>
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div className="outer">
            <div className="inner">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Say Hello</a>
                </li>
                {/* <li>
                  <a href="/projects">Projects</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
