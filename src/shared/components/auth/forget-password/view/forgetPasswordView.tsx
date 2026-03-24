import InputField from '@shared/components/common/InputFiled';
import AuthLayout from '@shared/layout/AuthLayout';
import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const ForgetPasswordView: React.FC = () => {
  return (
    <AuthLayout>
      <div className="forget-password-right">
        <h3>Forget Password</h3>
        <p>Enter your email address or number for reset password </p>

        <Formik
          initialValues={{
            emailOrMobile: ''
          }}
          validationSchema={Yup.object({
            emailOrMobile: Yup.string().required('Email or Mobile is required')
          })}
          onSubmit={(values) => {
            console.log('Form Data:', values);
          }}
        >
          {(formik) => (
            <Form>
              <div className="forget-form-group">
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

              <button type="submit" className="forget-btn">
                Send Code
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </AuthLayout>
  );
};

export default ForgetPasswordView;
