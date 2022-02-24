import { useState, useCallback, ChangeEvent } from 'react';
import Input from '../../Input';
import { setItemToStorage } from '../../../Utils/localStorage';
import { inputValidation } from '../../../Utils/inputValidation';

import './style.css';

type loginFormType = {
  userLoginToggle: () => void;
  onFormSubmit?: () => void;
}

const LoginForm = ({
  userLoginToggle,
  onFormSubmit,
}: loginFormType) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onEmailChange = useCallback((value: string) => {
    setFormData((state) => ({
      ...state,
      email: value,
    }));
  }, []);

  const onPasswordChange = useCallback((value: string) => {
    setFormData((state) => ({
      ...state,
      password: value,
    }));
  }, []);

  const handleSubmit = () => {
    const isEmailValid = inputValidation(formData.email);
    const isPasswordValid = inputValidation(formData.password);
    const isUserInfoValid = isEmailValid && isPasswordValid;

    if (isUserInfoValid) {
      setItemToStorage('isUserLogin', true);
    }

    if (onFormSubmit) {
      onFormSubmit();
    }

    userLoginToggle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        labelName="Email"
        onChange={onEmailChange}
        inputPlaceholder="Write your Email"
      />
      <Input
        type="password"
        labelName="Password"
        onChange={onPasswordChange}
        inputPlaceholder="Write your Password"
      />
      <Input type="submit" inputValue="Submit" />
    </form>
  );
};

export default LoginForm;
