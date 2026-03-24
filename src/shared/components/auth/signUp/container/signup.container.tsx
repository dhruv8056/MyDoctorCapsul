import { useNavigate } from 'react-router-dom';
import SignupView from '../view/signupView';
import { APP_ROUTE } from '@shared/constant/app-route';

const SignupContainer = () => {
  const navigate = useNavigate();
  const handleSigninClick = () => {
    navigate(APP_ROUTE.SIGNIN);
  };
  return <SignupView handleSigninClick={handleSigninClick} />;
};

export default SignupContainer;
