import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const SortDropdown = ({ options, selectedOption, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options.find(opt => opt.value === selectedOption)?.label || options[0].label;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg w-full md:w-48"
      >
        <span className="text-sm">{selectedLabel}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 w-full bg-white rounded-md shadow-lg z-40">
            {options.map(option => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${selectedOption === option.value ? 'bg-gray-100 font-medium' : ''
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SortDropdown;