import React from 'react';
import { addToCart, removeFromCart } from '../cart/store/cart.store';
import VideoFilters from './components/VideoFilters';
import { getSelectedVideo } from './store/player/player.selectors';
import { closeVideo, playVideo } from './store/player/player.store';
import { useDispatch, useSelector } from 'react-redux';
import { FiltersState, search } from './store/filters/search-filters.store';
import { getFilters } from './store/filters/search-filters.selectors';
import { VideoPlayer } from './components/VideoPlayer';
import { CatalogItem } from './components/CatalogItem';
import { useSearchQuery } from './store/search/videosSearchAPI';

export function CatalogPage() {
  const filters = useSelector(getFilters)
  const selectedVideo = useSelector(getSelectedVideo);
  const dispatch = useDispatch();

  const { data, error, isFetching } = useSearchQuery(filters, {
    refetchOnMountOrArgChange: false,
  })

  return (
    <div className="container mx-auto text-center">
      {/* Errors */}
      { error && <div>Server Error</div>}

      {/* Filters */}
      <VideoFilters
        data={data}
        loading={isFetching}
        filters={filters}
        onChangeFilter={(newFilters: FiltersState) => dispatch(search(newFilters)) }
      />

      {/* No results */}
      {
        !data?.length &&
          <div className="msg">⚠️ There are no results</div>
      }


      {/* List */}
      <div className="gap-8 mx-6 sm:mx-0 sm:columns-2 md:columns-3 ">
        {
          data?.map(v => <CatalogItem
            video={v}
            key={v.id}
            onVideoPlay={video => dispatch(playVideo(video))}
            onAddVideoToCart={video => dispatch(addToCart(video))}
            onRemoveVideoFromCart={video => dispatch(removeFromCart(video.id))}
          />)
        }
      </div>

      {/* Video Player */}
      {
        selectedVideo && <VideoPlayer
          video={selectedVideo}
          onClosePlayer={() => dispatch(closeVideo())}
          onAddVideoToCart={() => dispatch(addToCart(selectedVideo))}
        />
      }
    </div>
  )
};

