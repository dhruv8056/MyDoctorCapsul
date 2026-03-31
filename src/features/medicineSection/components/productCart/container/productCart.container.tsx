import { useContext } from 'react';
import GlobalContext from '@shared/context/GlobalContext';
import CartDrawer from '../view/CartDrawer';

const ProductCartContainer = () => {
  const { isDrawerOpen, setDrawerOpen, checkoutStep, setCheckoutStep } = useContext(GlobalContext);

  return <CartDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} step={checkoutStep} setStep={setCheckoutStep} />;
};

export default ProductCartContainer;
