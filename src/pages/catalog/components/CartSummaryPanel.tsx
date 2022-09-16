import clsx from 'clsx';
import React  from 'react';
import { Video } from '../../../model/pexels-video-response';

interface CartSummaryPanelProps {
  isOpened: boolean;
  items: Video[];
  total: number;
  onClose: () => void;
  onVideoPlay: (video: Video) => void;
  onConfirmOrder: () => void;
  onClearCart: () => void;
  onRemoveVideoFromCart: (video: Video) => void;
}
export function CartSummaryPanel(props: CartSummaryPanelProps) {
  const { items, total, isOpened } = props;


  return (
    <div
      className={clsx(
        'fixed flex flex-col h-screen w-96 top-0 right-0 bg-slate-200 border-l-2 border-l-slate-400 drop-shadow-2xl transition-all ease-in-out ',
        { 'right-0': isOpened },
        { '-right-96': !isOpened },
      )}>

      {/* Panel Headers */}
      <h1 className="bg-slate-500 text-white p-4 flex justify-between items-center">
        <div className="text-2xl">Your Cart</div>
        <div className="btn out" onClick={props.onClose}>x</div>
      </h1>

      <div className="grow overflow-scroll p-4">
        {/*No items in cart message*/}
        { !items.length && <div className="mt-3">No items in cart</div>}

        {/* cart items */}
          {
            items.map(v => {
              return (
                <div
                  key={v.id}
                  className="flex justify-between items-center m-1"
                >
                  <img
                    src={v.image} width={200} alt={v.user.name}
                    className="cursor-pointer"
                    onClick={() => props.onVideoPlay(v)}
                  />
                  <button
                    className="btn out"
                    onClick={() => props.onRemoveVideoFromCart(v)}
                  > - </button>
                </div>)
            })
          }
        </div>

      {/* panel footer */}
      <div className=" flex-none h-32 max-h-32 bg-slate-500 bottom-0 p-2">
        {/*cart summary*/}
        <div className="text-center  mb-3 text-white">
          <div className="text-2xl">Total order: € {total}</div>
          <div className="text-sm">( € 2 x {items.length } video )</div>
        </div>

        <div className="flex gap-2 justify-center">
          {/*Go to order page*/}
          <button
            className="btn animate-pulse"
            onClick={props.onConfirmOrder} disabled={!items.length}
          >Order Now</button>

          {/*Clear cart: remove all cart items*/}
          <button
            className="btn out"
            onClick={props.onClearCart} disabled={!items.length}
          >Clear Cart</button>
        </div>
      </div>

    </div>)
};

