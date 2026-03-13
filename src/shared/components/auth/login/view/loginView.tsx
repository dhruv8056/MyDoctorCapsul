import { Formik, Form } from 'formik';
import { ILogin, LoginViewProps } from '../interfaces/IAuth';
import { Box, FormControl } from '@mui/material';
import FieldComponent from '@core/dynamicForm/components/TextComponent/FieldComponent';
import { APP_CONSTANTS } from '@shared/constant/app.constant';

const initialValues: ILogin = {
  email: '',
  password: ''
};

const LoginView = ({ handleSubmit }: LoginViewProps) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form>
          <div className="min-h-screen w-full flex items-center justify-center login-container">
            <div className="login-card">
              <div className="login-logo-wrapper"></div>

              <div className="login-content">
                <h2 className="login-title">Login</h2>
                <p className="login-subtitle">To continue your account!</p>

                <div className="login-form">
                  <div className="login-form-group">
                    <Box>
                      <FormControl sx={{ width: '100%' }}>
                        <label htmlFor="email" className="login-label">
                          Email
                        </label>
                        <FieldComponent
                          field={{
                            fieldName: 'email',
                            required: true,
                            placeholder: 'admin@gmail.com'
                          }}
                        />
                      </FormControl>
                    </Box>
                  </div>

                  <div className="login-form-group">
                    <Box>
                      <FormControl sx={{ width: '100%' }}>
                        <label htmlFor="password" className="login-label">
                          Password
                        </label>
                        <FieldComponent
                          field={{
                            fieldName: 'password',
                            required: true,
                            inputType: 'password',
                            placeholder: 'admin@123'
                          }}
                        />
                      </FormControl>
                    </Box>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      type="button"
                      className="login-button-cancel"
                      onClick={() => {
                        setFieldValue('email', '');
                        setFieldValue('password', '');
                      }}
                    >
                      {APP_CONSTANTS.CANCEL_BUTTON}
                    </button>

                    <button type="submit" className="login-button-submit">
                      {APP_CONSTANTS.LOGIN_BUTTON}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginView;
