import { useState, useCallback, ChangeEvent } from 'react';
import Input from '../../Input';
import { setItemToStorage } from '../../../Utils/localStorage';
import { inputValidation } from '../../../Utils/inputValidation';

import './style.css';

type loginFormType = {
  handleUserLogin: () => void;
}

const LoginForm = ({
  handleUserLogin
}: loginFormType) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData((state) => ({
        ...state,
        email: event.target.value
    }))
  }, [])

  const onPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFormData((state) => ({
        ...state,
        password: event.target.value
    }))
  }, [])

  const handleSubmit = () => {
    const isEmailValid = inputValidation(formData.email);
    const isPasswordValid = inputValidation(formData.password);
    const isUserInfoValid = isEmailValid && isPasswordValid;

    if(isUserInfoValid) {
      setItemToStorage('isUserLogin', true);
    }

    handleUserLogin();
  }

  return (
    <form onSubmit={handleSubmit}>
        <Input
            type="email"
            labelName='Email'
            onChange={onEmailChange}
            inputPlaceholder="Write your Email"
            inputValue={formData.email}
        />
        <Input
            type="password"
            labelName='Password'
            onChange={onPasswordChange}
            inputPlaceholder='Write your Password'
            inputValue={formData.password}
        />
        <Input type="submit" inputValue='Submit'/>
    </form>
  )
}

export default LoginForm;
