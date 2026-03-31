export interface CartStepProps {
  onNext: () => void;
}

export interface AddressStepProps {
  onNext: () => void;
  onBack: () => void;
}

export interface PaymentStepProps {
  onBack: () => void;
}
