import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Video } from '../../../model/pexels-video-response';
import { isItemInCart } from '../../cart/store/cart.selectors';

export interface VideoPlayerProps {
  video: Video;
  onClosePlayer: () => void;
  onAddVideoToCart: () => void;
}
export function VideoPlayer(props: VideoPlayerProps) {
  const isItemAlreadyInCart = useSelector(isItemInCart(props.video.id));

  return <div className="fixed flex items-center justify-center bg-white p-4 top-0 left-0 bottom-0 right-0">
    <div className="relative">
      <video
        src={props.video?.video_files[0].link} autoPlay controls
        width="100%" className="max-h-screen min-h-screen"
      />

      <button
        className="btn-circle absolute left-5 top-5"
        onClick={props.onClosePlayer}
      >X</button>

      <button
        className={classNames(
          'btn-circle absolute top-5 right-5 ',
          { 'opacity-25': isItemAlreadyInCart }
        )}
        onClick={props.onAddVideoToCart}
      >+</button>

      <a
        className="btn-circle absolute right-5 bottom-20" rel="noreferrer"
        href={props.video?.video_files[0].link} download="attachment_url" target="_blank"
      >Download</a>

    </div>
  </div>
}
