import React from 'react';
import InputField from '@shared/components/common/InputFiled';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SignupViewProps } from '../interface/ISignup';
import AuthLayout from '@shared/layout/AuthLayout';

const SignupView: React.FC<SignupViewProps> = ({ handleSigninClick }) => {
  return (
    <AuthLayout>
      <div className="signup-right">
        <h3>Sign Up</h3>

        <Formik
          initialValues={{
            fullName: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            mobile: Yup.string()
              .required('Mobile number is required')
              .matches(/^[0-9]{10}$/, 'Enter valid mobile number'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Minimum 6 characters required').required('Password is required'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password')], 'Passwords must match')
              .required('Confirm your password')
          })}
          onSubmit={(values) => {
            console.log('Signup Data:', values);
          }}
        >
          {(formik) => (
            <Form>
              <div className="signup-form-group">
                <InputField
                  name="fullName"
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ''}
                />
              </div>

              <div className="signup-form-group">
                <InputField
                  name="mobile"
                  label="Mobile Number"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : ''}
                />
              </div>

              <div className="signup-form-group">
                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                />
              </div>

              <div className="signup-form-group">
                <InputField
                  name="password"
                  label="Create Password"
                  type="password"
                  placeholder="Enter Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                />
              </div>

              <div className="signup-form-group">
                <InputField
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ''}
                />
              </div>

              <button type="submit" className="signup-btn">
                Click to verify
              </button>
            </Form>
          )}
        </Formik>

        <p className="signup-text">
          Already have an account? <button onClick={handleSigninClick}>Sign in</button>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignupView;
