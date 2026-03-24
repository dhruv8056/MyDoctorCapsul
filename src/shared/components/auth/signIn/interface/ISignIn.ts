export interface ISignIn {
  email: string;
  password: string;
}

export interface SigninViewProps {
  handleSignupClick: () => void;
  handleForgetClick: () => void;
}
