import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import InputField from '@shared/components/common/InputFiled';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SigninViewProps } from '../interface/ISignIn';
import AuthLayout from '@shared/layout/AuthLayout';

const SigninView: React.FC<SigninViewProps> = ({ handleSignupClick, handleForgetClick }) => {
  return (
    <AuthLayout>
      <div className="signin-right">
        <h3>Sign In</h3>

        <Formik
          initialValues={{
            emailOrMobile: '',
            password: ''
          }}
          validationSchema={Yup.object({
            emailOrMobile: Yup.string().required('Email or Mobile is required'),
            password: Yup.string().required('Password is required')
          })}
          onSubmit={(values) => {
            console.log('Form Data:', values);
          }}
        >
          {(formik) => (
            <Form>
              <div className="form-group">
                <InputField
                  type="text"
                  label="Email / Mobile Number"
                  name="emailOrMobile"
                  placeholder="Enter your Email or mobile"
                  value={formik.values.emailOrMobile}
                  onChange={formik.handleChange}
                  error={formik.touched.emailOrMobile && formik.errors.emailOrMobile ? formik.errors.emailOrMobile : ''}
                />
              </div>

              <div className="form-group">
                <InputField
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                />

                <button type="button" className="forgot" onClick={handleForgetClick}>
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="signin-btn">
                Sign In
              </button>
            </Form>
          )}
        </Formik>

        <div className="divider">Or Continue with</div>

        <div className="social-buttons">
          <button type="button">
            <Icon icon="flat-color-icons:google" width="20" height="20" />
          </button>
          <button type="button">
            <Icon icon="logos:facebook" width="20" height="20" />
          </button>
          <button type="button">
            <Icon icon="devicon:apple" width="20" height="20" />
          </button>
        </div>

        <p className="signin-text">
          Don’t have an account? <button onClick={handleSignupClick}>Sign up</button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SigninView;
