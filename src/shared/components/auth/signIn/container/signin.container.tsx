import { useNavigate } from 'react-router-dom';
import SigninView from '../view/signinView';
import { APP_ROUTE } from '@shared/constant/app-route';

const SigninContainer = () => {
  const navigate = useNavigate();

  
  const handleSignupClick = () => {
    navigate(APP_ROUTE.SIGN_UP);
  };

  const handleForgetClick = () => {
    navigate(APP_ROUTE.FORGET_PASSWORD);
  };

  return <SigninView handleSignupClick={handleSignupClick} handleForgetClick={handleForgetClick} />;
};

export default SigninContainer;
