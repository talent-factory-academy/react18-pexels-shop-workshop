import React  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppLogo } from './AppLogo';
import { CartLogo } from './CartLogo';

import { getTotalCartItems } from '../store/cart/cart-items.selectors';
import { toggleCart } from '../store/cart/cart-ui.store';

export function NavBar() {
  const totalItems = useSelector(getTotalCartItems);
  const dispatch = useDispatch()

  return (
    <div className="bg-slate-200 p-4 flex items-center justify-between mb-2">
      <Link to="catalog" className="text-3xl flex items-center gap-2">
        <AppLogo /> RTK SHOP
      </Link>

      <div
        className="flex items-center gap-2 text-pink-500 cursor-pointer"
        onClick={() => dispatch(toggleCart())}
      >
        <CartLogo total={totalItems} />
      </div>
    </div>
  )
};


