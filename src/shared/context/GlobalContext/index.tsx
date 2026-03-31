// src/shared/context/GlobalContext/index.tsx
import { CartItem, CheckoutStep, GlobalContextProps, GlobalProviderProps } from '@shared/interfaces/IGlobalProviderProps';
import React, { createContext, useState } from 'react';
import medicine1 from '@assets/images/medicines/medicine-1.png';

const defaultValue: GlobalContextProps = {
  toggleSidebar: true,
  setToggleSidebar: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  cartItems: [],
  setCartItems: () => {},

  isDrawerOpen: false,
  setDrawerOpen: () => {},

  checkoutStep: 'cart',
  setCheckoutStep: () => {}
};

const GlobalContext = createContext<GlobalContextProps>(defaultValue);

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      price: 2.5,
      quantity: 1,
      image: medicine1 // ✅ import image
    },
    {
      id: 2,
      name: 'Vitamin C Tablets',
      category: 'Supplements',
      price: 5.0,
      quantity: 2,
      image: medicine1
    },
    {
      id: 3,
      name: 'Cough Syrup',
      category: 'Cold & Flu',
      price: 7.25,
      quantity: 1,
      image: medicine1
    }
  ]);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('cart');

  const contextValue = {
    toggleSidebar,
    setToggleSidebar,
    searchQuery,
    setSearchQuery,
    cartItems,
    setCartItems,
    isDrawerOpen,
    setDrawerOpen,
    checkoutStep,
    setCheckoutStep
  };

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export { GlobalProvider };
export default GlobalContext;
