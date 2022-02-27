import {
  ChangeEvent,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import clsx from 'clsx';

import './style.css';

interface InputType {
  disabled?: boolean;
  labelName?: string;
  type: 'text' | 'email' | 'password' | 'submit' | 'number';
  className?: string;
  containerClass?: string;
  inputValue?: string | number;
  inputPlaceholder?: string;
  children?: ReactNode;
  onChange?: (value: string | number, event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  disabled,
  labelName = '',
  type = 'text',
  className,
  containerClass,
  inputValue,
  inputPlaceholder = '',
  children,
  onChange,
}: InputType) => {
  const [value, setValue] = useState<InputType['inputValue']>(inputValue);
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
    <label className={containerClass}>
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
      {children}
    </label>
  );
};

export default Input;
