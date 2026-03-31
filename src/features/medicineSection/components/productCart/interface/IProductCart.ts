export interface CartStepProps {
  onNext: () => void;
}

export interface AddressStepProps {
  onNext: () => void;
  onBack: () => void;
}

export interface PaymentStepProps {
  onBack: () => void;
  onSuccess: () => void;
}


export interface orderTrackingProps {
  open: boolean;
  onClose: () => void;
}