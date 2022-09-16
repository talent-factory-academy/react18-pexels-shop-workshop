// libs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Catalog Components
import { CartSummaryPanel, CatalogItem, VideoFilters, VideoPlayer } from './components';

// Store Selectors
import { getCartItems, getTotalCost } from './store/cart/cart-items.selectors';
import { getCartSummarPanelIsOpened } from './store/cart/cart-ui.selectors';
import { getSelectedVideo } from './store/player/player.selectors';
import { getFilters } from './store/filters/search-filters.selectors';

// Store Slices
import { addToCart, clearCart, removeFromCart } from './store/cart/cart-items.store';
import { closeCart } from './store/cart/cart-ui.store';
import { closeVideo, playVideo } from './store/player/player.store';
import { FiltersState, search } from './store/filters/search-filters.store';
import { useSearchQuery } from './store/search/videosSearchAPI';

export function CatalogPage() {
  // selectors
  const filters = useSelector(getFilters);
  const isCartSummaryOpened = useSelector(getCartSummarPanelIsOpened);
  const selectedVideo = useSelector(getSelectedVideo);
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getTotalCost);
  const { data, error, isFetching } = useSearchQuery(filters, {
    refetchOnMountOrArgChange: false,
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto text-center">
      {/* Server Errors (server down, reach API limits, ...) */}
      { error && <div>Server Error</div>}

      {/* Filters: search for text and total of items to load */}
      <VideoFilters
        data={data}
        loading={isFetching}
        filters={filters}
        onChangeFilter={(newFilters: FiltersState) => dispatch(search(newFilters)) }
      />

      {/* No results msg: visible if there are no results && if it's not fetching  */}
      {
        (!data?.length && !isFetching) &&
          <div className="msg">⚠️ There are no results</div>
      }


      {/* List: display result in columns  */}
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

      {/* Cart Summary Panel */}
      <CartSummaryPanel
        isOpened={isCartSummaryOpened}
        total={cartTotal}
        items={cartItems}
        onClose={() => dispatch(closeCart())}
        onVideoPlay={(video) => dispatch(playVideo(video))}
        onClearCart={() => dispatch(clearCart())}
        onConfirmOrder={() => navigate('/confirm-order')}
        onRemoveVideoFromCart={video => dispatch(removeFromCart(video.id))}
      />
    </div>
  )
};

