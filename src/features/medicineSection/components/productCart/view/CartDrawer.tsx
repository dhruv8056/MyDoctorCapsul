import Drawer from '@shared/components/common/Drawer';

import { CheckoutStep } from '@shared/interfaces/IGlobalProviderProps';
import CartStep from './cartStep';
import AddressStep from './addressStep';
import PaymentStep from './paymentStep';
import { useState } from 'react';
import OrderTracking from './orderTracking';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  step: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
}

const CartDrawer = ({ isOpen, onClose, step, setStep }: Props) => {
   const [isTrackingOpen, setIsTrackingOpen] = useState(false);
   const [orderId, setOrderId] = useState("");

  const handlePaymentSuccess = () => {
    const newOrderId = "ORD" + Date.now();
    setOrderId(newOrderId);

    setIsTrackingOpen(true);
    onClose(); // drawer bandh thai jase
  };
  return (
    <>  
    <Drawer isOpen={isOpen} onClose={onClose}>
      {step === 'cart' && <CartStep onNext={() => setStep('address')} />}

      {step === 'address' && <AddressStep onNext={() => setStep('payment')} onBack={() => setStep('cart')} />}

      {step === 'payment' && <PaymentStep onBack={() => setStep('address')}  onSuccess={handlePaymentSuccess} />}
    </Drawer>
     <OrderTracking open={isTrackingOpen} onClose={() => setIsTrackingOpen(false)} />
      </>
  );
};

export default CartDrawer;
