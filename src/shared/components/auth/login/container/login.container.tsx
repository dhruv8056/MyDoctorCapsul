import { APP_ROUTE } from '@shared/constant/app-route';
import { APP_CONSTANTS } from '@shared/constant/app.constant';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ILogin } from '../interfaces/IAuth';
import LoginView from '../view/loginView';

export const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@gmail.com',
    password: 'admin@123',
    role: APP_CONSTANTS.ROLE_NAME.ADMIN,
    token: 'fake-token-admin'
  },
  {
    id: '2',
    email: 'doctor@gmail.com',
    password: 'doctor@123',
    role: APP_CONSTANTS.ROLE_NAME.DOCTOR,
    token: 'fake-token-doctor'
  },
  {
    id: '3',
    email: 'pharmacy@gmail.com',
    password: 'pharmacy@123',
    role: APP_CONSTANTS.ROLE_NAME.PHARMACY,
    token: 'fake-token-pharmacy'
  },
  {
    id: '4',
    email: 'diagnostic@gmail.com',
    password: 'diagnostic@123',
    role: APP_CONSTANTS.ROLE_NAME.DIAGNOSTIC_CENTRE,
    token: 'fake-token-diagnostic'
  },
  {
    id: '5',
    email: 'user@gmail.com',
    password: 'user@123',
    role: APP_CONSTANTS.ROLE_NAME.USER,
    token: 'fake-token-user'
  }
];

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values: ILogin) => {
    const user = MOCK_USERS.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (!user) {
      alert('Invalid credentials');
      return;
    }

    const fakeUser = {
      id: user.id,
      email: user.email,
      role: { name: user.role },
      token: user.token
    };

    localStorage.setItem('token', fakeUser.token);
    localStorage.setItem('role', fakeUser.role.name);

    dispatch({ type: 'user/login/fulfilled', payload: fakeUser });

    // Redirect based on role
    switch (user.role) {
      case APP_CONSTANTS.ROLE_NAME.ADMIN:
        navigate(APP_ROUTE.SUPER_ADMINS + APP_ROUTE.DASHBOARD);
        break;

      case APP_CONSTANTS.ROLE_NAME.DOCTOR:
        navigate(APP_ROUTE.DOCTOR + APP_ROUTE.DASHBOARD);
        break;

      case APP_CONSTANTS.ROLE_NAME.PHARMACY:
        navigate(APP_ROUTE.PHARMACY + APP_ROUTE.DASHBOARD);
        break;

      case APP_CONSTANTS.ROLE_NAME.DIAGNOSTIC_CENTRE:
        navigate(APP_ROUTE.DIAGNOSTIC_CENTRE + APP_ROUTE.DASHBOARD);
        break;

      case APP_CONSTANTS.ROLE_NAME.USER:
        navigate(APP_ROUTE.USER + APP_ROUTE.DASHBOARD);
        break;

      default:
        navigate('/');
    }
  };

  return <LoginView handleSubmit={handleSubmit} />;
};

export default LoginContainer;