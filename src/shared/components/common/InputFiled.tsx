import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  label?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;

  // ✅ Tailwind style props
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}

const InputField: React.FC<InputProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  name,
  onChange,
  error,
  disabled,

  containerClass = '',
  labelClass = '',
  inputClass = ''
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={`w-full ${containerClass}`}>
      {label && <label className={`block mb-1 text-sm ${labelClass}`}>{label}</label>}

      <div className="relative">
        <input
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-4 py-3 rounded-lg border outline-none transition
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${inputClass}
          `}
        />

        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
            <Icon icon={showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} width="20" />
          </button>
        )}
      </div>

      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default InputField;
