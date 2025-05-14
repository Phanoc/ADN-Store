import React, { useEffect, useState, useContext } from 'react';

import CartItems from './CartItems';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { teams, applyTheme } from '../../colors/theme';

const Cart = (props) => {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    axios
      .get(process.env.PUBLIC_URL + '/data/Data.json')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const cartItems = {
    id: data.id,
    name: data.name,
    club: data.club,
    image: data.image1,
    price: data.price,
    description: data.description,
  };

  return (
    <div className='dropdown'>
      <CartItems items={cartItems} />
    </div>
  );
};

export default Cart;
