import clsx from 'clsx';
import { ChangeEvent } from 'react';

import './style.css';

type InputType = {
  disabled?: boolean;
  labelName?: string;
  type: 'text' | 'email' | 'password' | 'submit';
  className?: string;
  inputValue?: string | number;
  inputPlaceholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  disabled,
  labelName = '',
  type = 'text',
  className,
  inputValue,
  inputPlaceholder = '',
  onChange
}: InputType) => {
  const inputClassName = clsx('input-container', className)

  return (
    <label>
      {labelName}
      <input
        className={inputClassName}
        type={type}
        disabled={disabled}
        onChange={onChange}
        value={inputValue}
        placeholder={inputPlaceholder}
      />
    </label>
  )
}

export default Input;
