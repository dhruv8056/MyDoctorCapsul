import React from 'react';
import { Icon } from '@iconify/react';

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;

  containerClass?: string;
  labelClass?: string;
  selectClass?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select option',
  error,
  disabled,

  containerClass = '',
  labelClass = '',
  selectClass = ''
}) => {
  return (
    <div className={`w-full ${containerClass}`}>
      {label && <label className={`block mb-1 text-sm ${labelClass}`}>{label}</label>}

      {/* 🔹 Wrapper */}
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-4 py-3 pr-10 rounded-lg border outline-none transition appearance-none
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${selectClass}
          `}
        >
          <option value="">{placeholder}</option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* 🔹 Custom Icon */}
        <Icon icon="mdi:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" width="20" />
      </div>

      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default SelectField;
