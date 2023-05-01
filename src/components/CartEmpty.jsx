import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Кошик пуста <icon>😕</icon>
        </h2>
        <p>
          Ймовірно, ви ще не замовляли піцу.
          <br />
          Для того, щоб замовити піцу, перейдіть на головну сторінку.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" class="button button--black">
          <span>Повернутися назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
