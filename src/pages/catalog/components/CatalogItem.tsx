import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { Video } from '../../../model/pexels-video-response';
import { isItemInCart } from '../../cart/store/cart.selectors';

interface CatalogItemProps {
  video: Video;
  onVideoPlay: (video: Video) => void;
  onAddVideoToCart: (video: Video) => void;
  onRemoveVideoFromCart: (video: Video) => void;
}

export const CatalogItem = (props: CatalogItemProps) => {
  const { video: v, onVideoPlay, onAddVideoToCart, onRemoveVideoFromCart } = props;
  const videoInCart = useSelector(isItemInCart(v?.id));

  return (
    <div className="relative">
      <img
        src={v.image}  alt={v.user.name}
        onClick={() => onVideoPlay(v)}
        className="w-full aspect-auto rounded-xl cursor-pointer mb-8"
      />
      <div className="absolute bottom-5 left-5 bg-white p-2 rounded-xl bg-opacity-75 text-xs">
        {v.width} x {v.height} px
      </div>
        <button
          className={classNames(
            'btn-circle absolute bottom-5 right-5',
            { 'opacity-25': videoInCart }
          )}
          onClick={() => videoInCart ? onRemoveVideoFromCart(v) : onAddVideoToCart(v)}
        >+</button>
    </div>
  )
}
