import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Video } from '../../../model/pexels-video-response';
import { isItemInCart } from '../../../core/store/cart/cart-items.selectors';

interface VideoPlayerProps {
  video: Video;
  onClosePlayer: () => void;
  onAddVideoToCart: () => void;
}
export function VideoPlayer(props: VideoPlayerProps) {
  // boolean: check if the current item is already in cart
  const isItemAlreadyInCart = useSelector(isItemInCart(props.video.id));

  return (
    <div className="fixed flex items-center justify-center bg-white p-4 top-0 left-0 bottom-0 right-0 z-10">
      <div className="relative">
        {/*player video*/}
        <video
          src={props.video?.video_files[0].link} autoPlay controls
          width="100%" className="max-h-screen min-h-screen"
        />

        {/*Close video player*/}
        <button
          className="btn-circle absolute left-5 top-5"
          onClick={props.onClosePlayer}
        >X</button>

        {/*Add to cart button*/}
        <button
          className={clsx(
            'btn-circle absolute top-5 right-5 ',
            { 'opacity-25': isItemAlreadyInCart }
          )}
          onClick={props.onAddVideoToCart}
        >+</button>

        {/*Download button*/}
        <a
          className="btn-circle absolute right-20 top-5 !bg-slate-600" rel="noreferrer"
          href={props.video?.video_files[0].link}
          download="attachment_url"
          target="_blank"
        > ↓ </a>

      </div>
    </div>
  )
}
