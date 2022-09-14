import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { closeVideo } from '../store/player/player.store';
import { addToCart } from '../../cart/store/cart.store';
import { getCurrentVideo } from '../store/search/search-filters.selectors';
import { isItemInCart } from '../../cart/store/cart.selectors';

/**
 * Video Player
 */
export function VideoPlayer() {
  const isItemAlreadyInCart = useSelector(isItemInCart);
  const video = useSelector(getCurrentVideo);
  const dispatch = useDispatch();

  return video ? <div className="fixed flex items-center justify-center bg-white p-4 top-0 left-0 bottom-0 right-0">
    <div className="relative">
      <video
        src={video?.video_files[0].link} autoPlay controls
        width="100%" className="max-h-screen min-h-screen"
      />

      <button
        className="btn-circle absolute left-5 top-5"
        onClick={() => dispatch(closeVideo())}
      >X</button>

      <button
        className={classNames(
          'btn-circle absolute top-5 right-5 ',
          { 'opacity-25': isItemAlreadyInCart }
        )}
        onClick={() => dispatch(addToCart(video))}
      >+</button>

      <a
        className="btn-circle absolute right-5 bottom-20" rel="noreferrer"
        href={video?.video_files[0].link} download="attachment_url" target="_blank"
      >Download</a>


    </div>
  </div> : null
}
