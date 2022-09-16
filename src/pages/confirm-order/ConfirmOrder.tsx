import { useSelector } from 'react-redux';
import { getCartItems, getTotalCost } from '../../core/store/cart/cart-items.selectors';

export function ConfirmOrder() {
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getTotalCost);

  return <div className="container mx-auto">
    <div className="flex flex-col gap-y-3">
      <div>Total Items: {cartItems.length} videos (€ {cartTotal})</div>

      <h1 className="text-2xl">Your Info</h1>
      Here there will be a form to add user info
    </div>
  </div>
}
