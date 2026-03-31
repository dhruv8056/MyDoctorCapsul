import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

interface UploadFieldProps {
  label?: string;
  onChange?: (file: File | null) => void;
}

const UploadField: React.FC<UploadFieldProps> = ({ label, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange?.(selectedFile);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (inputRef.current) inputRef.current.value = '';
    onChange?.(null);
  };

  return (
    <div className="flex flex-col gap-1.5">
      {label && <p className="text-sm font-medium text-[#03162b]">{label}</p>}

      <div
        onClick={handleClick}
        className="border-2 border-dashed border-[#E4E9EC] rounded-xl p-5 flex flex-col items-center justify-center gap-2 text-gray-400 cursor-pointer transition-all duration-200  bg-[#F9F9F9]"
      >
        <input type="file" ref={inputRef} className="hidden" onChange={handleFileChange} />

        {!file ? (
          <>
            <Icon icon="mdi:camera-outline" width="20" />
            <span className="text-sm font-medium">Upload Photo</span>
          </>
        ) : (
          <div className="flex items-center justify-between w-full text-sm text-[#03162b]">
            <span className="truncate">{file.name}</span>

            <button type="button" onClick={handleRemove} className="ml-2 text-base hover:text-red-500">
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadField;
