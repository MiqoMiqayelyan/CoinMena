import { ChangeEvent, useState, useEffect } from 'react';
import clsx from 'clsx';

import './style.css';

interface InputType {
  disabled?: boolean;
  labelName?: string;
  type: 'text' | 'email' | 'password' | 'submit';
  className?: string;
  inputValue?: string | number;
  inputPlaceholder?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  disabled,
  labelName = '',
  type = 'text',
  className,
  inputValue,
  inputPlaceholder = '',
  onChange,
}: InputType) => {
  const [value, setValue] = useState<InputType['inputValue']>('');
  const inputClassName = clsx('input-container', className);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;

    setValue(targetValue);

    if (onChange) {
      onChange(targetValue, event);
    }
  };

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  return (
    <label>
      {labelName}
      <input
        className={inputClassName}
        type={type}
        disabled={disabled}
        onChange={onChangeHandler}
        value={value}
        placeholder={inputPlaceholder}
        id={labelName}
      />
    </label>
  );
};

export default Input;
