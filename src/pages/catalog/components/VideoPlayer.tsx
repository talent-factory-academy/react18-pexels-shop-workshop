import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchQuery } from '../store/search/search.api';
import { closeVideo } from '../store/player/player.store';
import { addToCart } from '../../cart/store/cart.store';
import { getVideoId } from '../store/player/player.selectors';
import { getFilters } from '../store/search/search-filters.selectors';
import { isItemInCart } from '../../cart/store/cart.selectors';

/**
 * Video Player
 * @constructor
 */
export function VideoPlayer() {
  // get selected video ID
  const videoId = useSelector(getVideoId);
  const filters = useSelector(getFilters)
  const isItemAlreadyInCart = useSelector(isItemInCart(videoId));
  const dispatch = useDispatch();

  // get video URL
  // note: selectFromResult is used to avoid refetch / query
  const { video } = useSearchQuery(filters.text, {
    selectFromResult: ({ data }) => ({
      video: data?.find(item => item.id === videoId)
    })
  })

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
