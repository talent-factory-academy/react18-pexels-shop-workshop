import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartItems, getTotalCost } from '../../core/store/cart/cart-items.selectors';
import { AppDispatch } from '../../main';
import { sendOrder } from './store/order-confirm.actions';

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export function ConfirmOrder() {
  const [email, setEmail] = useState<string>('');
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getTotalCost);
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();

  function submitOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(sendOrder(email))
      .then(res => {
        if (res.payload === 'OK')
        console.log(res.payload);
        navigate('/')
      })
  }

  const isEmailValid = email.length && email.match(EMAIL_REGEX);

  return (
    <div className="container mx-auto">
      <form onSubmit={submitOrder} className="flex flex-col gap-y-3">
        <h1 className="text-2xl">Cart Info</h1>
        <div>Items: <span className="font-bold">{cartItems.length} videos</span></div>
        <div>Total: <span className="font-bold">€ {cartTotal}</span></div>

        <h1 className="text-2xl">Your Info</h1>

        <input
          type="text"
          onChange={e => setEmail(e.currentTarget.value)}
          className="form-control"
          placeholder="your email address"
        />

        <div>
          <button
            className="btn out"
            disabled={!isEmailValid}
            onClick={() => submitOrder }>
            ORDER NOW
          </button>
        </div>
      </form>
    </div>
  )
}


