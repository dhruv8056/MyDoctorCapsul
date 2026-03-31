import { useContext } from 'react';
import GlobalContext from '@shared/context/GlobalContext';
import CartItemCard from '@shared/components/common/CartItemCard';
import { CartStepProps } from '../interface/IProductCart';
import { Icon } from '@iconify/react/dist/iconify.js';

const CartStep = ({ onNext }: CartStepProps) => {
  const { cartItems, setCartItems } = useContext(GlobalContext);

  const increaseQty = (id: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const deliveryFee = subtotal > 20 ? 0 : 2; // free delivery logic
  const discount = 0; // you can add later
  const tax = subtotal * 0.05; // 5% tax

  const finalTotal = subtotal + deliveryFee + tax - discount;

  return (
    <div className="cart-step">
      <div className="cart-step__header">
        <button className="cart-step__back" onClick={() => {}}>
          <Icon icon="solar:arrow-left-linear" width="24" height="24" />
        </button>

        <h2 className="cart-step__title">Shopping Cart</h2>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="cart-step__content">
        <div className="cart-step__list">
          {cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
              onIncrease={() => increaseQty(item.id)}
              onDecrease={() => decreaseQty(item.id)}
            />
          ))}
        </div>

        <div className="cart-step__summary-title">Order Summary</div>

        <div className="cart-step__summary">
          <div className="cart-step__row">
            <span className="cart-step__label">Subtotal</span>
            <span className="cart-step__value">${subtotal.toFixed(2)}</span>
          </div>

          <div className="cart-step__row">
            <span className="cart-step__label">Shipping Cost</span>
            <span className="cart-step__value">${deliveryFee.toFixed(2)}</span>
          </div>

          <div className="cart-step__total">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-step__offer">
          <p className="cart-step__offer-title">Free Delivery on next order!</p>
          <p className="cart-step__offer-sub">Add $20.00 more to qualify for free coupons.</p>
        </div>
      </div>

      {/* FIXED FOOTER */}
      <div className="cart-step__footer">
        <button onClick={onNext} className="cart-step__btn">
          Proceeds to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartStep;
