import React from 'react';
import classNames from 'classnames';
import { Video } from '../../../model/pexels-video-response';
import { useDispatch, useSelector } from 'react-redux';
import { playVideo } from '../store/player/player.store';
import { addToCart, removeFromCart } from '../../cart/store/cart.store';
import { isItemInCart } from '../../cart/store/cart.selectors';

export const CatalogItem: React.FC<{item: Video}> = ({ item: v }) => {
  const dispatch = useDispatch();
  const itemInCart = useSelector(isItemInCart(v.id));

  return (
    <div className="relative">
      <img
        src={v.image}  alt={v.user.name}
        onClick={() => dispatch(playVideo(v.id))}
        className="w-full aspect-auto rounded-xl cursor-pointer mb-8"
      />
      <div className="absolute bottom-5 left-5 bg-white p-2 rounded-xl bg-opacity-75 text-xs">
        {v.width} x {v.height} px
      </div>
        <button
          className={classNames(
            'btn-circle absolute bottom-5 right-5',
            { 'opacity-25': itemInCart }
          )}
          onClick={() => dispatch(itemInCart ? removeFromCart(v.id) : addToCart(v))}
        >+</button>
    </div>
  )
}
