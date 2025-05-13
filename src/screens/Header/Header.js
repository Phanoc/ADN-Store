import React, { useContext, useEffect } from 'react';
import './Header.css';
import { AppContext } from '../../AppContext';
import { teams, applyTheme } from '../../colors/theme';
import { SlArrowUp } from 'react-icons/sl';
import { SlArrowDown } from 'react-icons/sl';
const Header = () => {
  const { club } = useContext(AppContext);
  useEffect(() => {
    applyTheme(club);
  }, [club]);

  useEffect(() => {
    if (teams[club]) {
      document.documentElement.style.setProperty(
        '--color_title',
        teams[club].color_title
      );
      document.documentElement.style.setProperty(
        '--navbar-bg',
        `url(${teams[club].background})`
      );
      document.documentElement.style.setProperty(
        '--font_logo',
        teams[club].font_logo
      );
      document.documentElement.style.setProperty(
        '--font_text',
        teams[club].font_text
      );
      document.documentElement.style.setProperty(
        '--main_color',
        teams[club].main_color
      );
      document.documentElement.style.setProperty(
        '--second_color',
        teams[club].second_color
      );
    }
  }, [club]);
  return (
    <div className='flex flex-col card'>
      <ul className='flex flex-col'>
        <li className='header__li'>
          <a href='#all'>ALL</a>
        </li>
        <li className='header__li'>
          <a href='#all'>MENS</a>
        </li>
        <li className='header__li'>
          <a href='#all'>WOMENS</a>
        </li>
      </ul>
      <div className='flex flex-col'>
        <div className='header__div-filter'>
          <div className='header__div-container1'>
            <div className='icon-filter'>
              <div className='line'></div>
              <div className='line'></div>
              <div className='circle1'></div>
              <div className='circle2'></div>
            </div>
            <span className='header__title title1'>Filter</span>
          </div>
        </div>
        <div className='header__div-recommended'>
          <div className='header__div-container2'>
            <div className='icon-recommended'>
              <SlArrowUp className='arrow-up' />
              <SlArrowDown className='arrow-down' />
            </div>
            <span className='header__title title2'>Recommended</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
