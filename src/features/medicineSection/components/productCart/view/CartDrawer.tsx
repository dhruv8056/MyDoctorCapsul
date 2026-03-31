import Drawer from '@shared/components/common/Drawer';

import { CheckoutStep } from '@shared/interfaces/IGlobalProviderProps';
import CartStep from './cartStep';
import AddressStep from './addressStep';
import PaymentStep from './paymentStep';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  step: CheckoutStep;
  setStep: (step: CheckoutStep) => void;
}

const CartDrawer = ({ isOpen, onClose, step, setStep }: Props) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      {step === 'cart' && <CartStep onNext={() => setStep('address')} />}

      {step === 'address' && <AddressStep onNext={() => setStep('payment')} onBack={() => setStep('cart')} />}

      {step === 'payment' && <PaymentStep onBack={() => setStep('address')} />}
    </Drawer>
  );
};

export default CartDrawer;
