import { useNavigate } from 'react-router-dom';
import HeaderView from '../view/headerView';
import { APP_ROUTE } from '@shared/constant/app-route';

const HeaderConatiner = () => {
  const navigate = useNavigate();
  const handleSignInNevigate = () => {
    navigate(APP_ROUTE.SIGNIN);
  };

  const handleSignUpNevigate = () => {
    navigate(APP_ROUTE.SIGN_UP);
  };

  return <HeaderView handleSignInNevigate={handleSignInNevigate} handleSignUpNevigate={handleSignUpNevigate} />;
};

export default HeaderConatiner;
