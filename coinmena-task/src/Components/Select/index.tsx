import { ChangeEvent, useState } from 'react';

import './style.css';

type SelectType = {
  options?: {
      value: string,
      label: string,
  }[],
  selectName?: string,
  defaultValue?: string,
  className?: string,
  disabled?: boolean,
  onChange?: (value: string, event: ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({
  options,
  selectName,
  defaultValue,
  className,
  disabled,
  onChange,
}: SelectType) => {
  const [value, setValue] = useState<string>(defaultValue || '');

  const handleSelectChange = (event : ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setValue(selectedValue);

    if (onChange) {
      onChange(selectedValue, event);
    }
  };

  return (
    <select
      className={className}
      id={selectName}
      name={selectName}
      value={value}
      onChange={handleSelectChange}
      disabled={disabled}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
