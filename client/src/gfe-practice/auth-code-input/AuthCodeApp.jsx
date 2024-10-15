import React, { useState } from 'react';
import AuthCodeInput from './AuthCodeInput';

const AuthCodeApp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (code) => {
    setIsSubmitting(true);

    fetch('https://www.greatfrontend.com/api/questions/auth-code-input', {
      method: 'POST',
      body: JSON.stringify({ otp: code }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.text())
      .then((res) => alert(res))
      .catch(() => alert('Seomthing went wrong, Please try again'))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <AuthCodeInput length={6} onSubmit={onSubmit} isDisabled={isSubmitting} />
  );
};

export default AuthCodeApp;
