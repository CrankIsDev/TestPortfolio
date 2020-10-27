import React from 'react';
import {NavLink} from 'react-router-dom';
import { ReactComponent as GitHubIcon } from '../assets/github-icon.svg';
import CopyMailTo from 'react-copy-mailto';

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/tutoract" exact>
                  Tutoract
                </NavLink>
              </li>
              <li>
                <NavLink to="/justRunGame" exact>
                  Just Run
                </NavLink>
              </li>
              <li>
                <NavLink to="/coming-soon" exact>
                  Coming Soon
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-me" exact>
                  About-me
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
              <div className="nav-infos">
                <ul className="nav-info">
                  <li className="nav-info-label">Email</li>
                  <li>
                    <CopyMailTo email="stanguise4@gmail.com" />                    
                  </li>
                </ul>
                <ul className="nav-info">
                  <li className="nav-info-label">Phone</li>
                  <li>06 44 96 78 46</li>
                </ul>
                <ul className="nav-info">
                  <li className="nav-info-label">
                    <a href="https://github.com/CrankIsDev" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  </li>
                </ul>
              </div> 
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;