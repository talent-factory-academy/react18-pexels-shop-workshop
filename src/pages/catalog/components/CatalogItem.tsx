import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { isItemInCart } from '../../../core/store/cart/cart-items.selectors';
import { Video } from '../../../model/pexels-video-response';
import { convertSecondsInHumanTime } from '../../../shared/utils/time.utils';

interface CatalogItemProps {
  video: Video;
  onVideoPlay: (video: Video) => void;
  onAddVideoToCart: (video: Video) => void;
  onRemoveVideoFromCart: (video: Video) => void;
}

export const CatalogItem = (props: CatalogItemProps) => {
  const { video: v, onVideoPlay, onAddVideoToCart, onRemoveVideoFromCart } = props;
  // boolean: check if the current item is already in cart
  const videoInCart = useSelector(isItemInCart(v?.id));

  return (
    <div className="relative">
      {/* Video Thumb */}
      <img
        src={v.image}  alt={v.user.name}
        onClick={() => onVideoPlay(v)}
        className="w-full aspect-auto rounded-xl cursor-pointer mb-8"
      />

      {/*Video size*/}
      <div className="absolute bottom-2 right-2 bg-white p-2 rounded-xl bg-opacity-75 text-xs">
        {v.width} x {v.height} px
      </div>

      {/*Video Duration*/}
      <div className="absolute bottom-2 left-2 bg-white p-2 rounded-xl bg-opacity-75 text-xs">
        {convertSecondsInHumanTime(v.duration)}
      </div>

      {/*Button: Add to Cart / Remove from cart*/}
      <button
        className={clsx(
          'btn-circle absolute top-2 right-2',
          { '!bg-slate-400': videoInCart }
        )}
        onClick={() => videoInCart ? onRemoveVideoFromCart(v) : onAddVideoToCart(v)}
      >
        { videoInCart ? '-' : '+' }
      </button>
    </div>
  )
}
