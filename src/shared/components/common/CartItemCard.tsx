// src/shared/components/cart/CartItemCard.tsx

import React from 'react';
import { Icon } from '@iconify/react';

interface CartItemProps {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItemCard: React.FC<CartItemProps> = ({ name, category, price, quantity, image, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl border bg-white shadow-sm">
      {/* Image */}
      <div className="w-[70px] h-[70px] bg-gray-100 rounded-lg flex items-center justify-center">
        <img src={image} alt={name} className="w-10 h-10 object-contain" />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-blue-700 font-semibold mt-1">${price.toFixed(2)}</p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 gap-3">
        <button onClick={onDecrease}>
          <Icon icon="mdi:minus" className="text-blue-700" />
        </button>

        <span className="text-sm font-medium">{quantity}</span>

        <button onClick={onIncrease}>
          <Icon icon="mdi:plus" className="text-blue-700" />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
