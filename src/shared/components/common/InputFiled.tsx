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
  width?: string;
  className?: string;
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
  width = 'w-full',
  className = ''
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={`input-wrapper ${width} ${className}`}>
      {label && <label className="input-label">{label}</label>}

      <div className="input-box">
        <input
          type={isPassword && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          className={`input-field ${error ? 'input-error' : ''}`}
        />

        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-btn">
            <Icon icon={showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} width="20" />
          </button>
        )}
      </div>

      {error && <span className="error-text">{error}</span>}
    </div>
  );
};

export default InputField;
