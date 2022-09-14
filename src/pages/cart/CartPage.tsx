import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from './store/cart.store';
import { getCartItems, getTotalCost } from './store/cart.selectors';

export const CartPage: React.FC = () => {
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getTotalCost);
  const dispatch = useDispatch();

  function orderNow() {
    window.alert(`You have ordered ${cartItems.length} video (€ ${cartTotal})` )
    console.log(cartItems)
  }

  return (
    <div>
      {/*Cart Items*/}
      {
        cartItems.map(v => {
          return (
            <div
              key={v.id}
              className="flex justify-between items-center m-4 p-4 border-b"
            >
              <img src={v.image} width={200} alt={v.user.name}/>
              <div>
                <button className="btn-circle" onClick={() => dispatch(removeFromCart(v.id))}>-</button>
              </div>
            </div>)
        })
      }

      {/*Total Cart*/}
      <div className="text-center text-3xl">  € {cartTotal}  </div>

      {/*Order Now - not implemented*/}
      <div className="mt-6 flex gap-2 justify-center">
        <button
          className="btn-circle"
          onClick={orderNow} disabled={!cartItems.length}
        >Order Now</button>

        <button
          className="btn-circle"
          onClick={() => dispatch(clearCart())} disabled={!cartItems.length}
        >Clear Cart</button>
      </div>

    </div>)
};

