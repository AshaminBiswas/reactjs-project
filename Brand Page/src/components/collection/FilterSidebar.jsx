import { useState } from 'react';

const FilterSidebar = ({ filters, onChange, availableFilters, showApplyButton = true }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      price: {
        ...prev.price,
        [name]: parseInt(value)
      }
    }));
  };

  const handleCheckboxChange = (type, value) => {
    setLocalFilters(prev => {
      const currentValues = [...prev[type]];
      const index = currentValues.indexOf(value);

      if (index === -1) {
        currentValues.push(value);
      } else {
        currentValues.splice(index, 1);
      }

      return {
        ...prev,
        [type]: currentValues
      };
    });
  };

  const applyFilters = () => {
    onChange(localFilters);
  };

  return (
    <div className="space-y-8 top-30 left-4 md:sticky">
      {/* Price Range Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>₹{localFilters.price.min}</span>
            <span>₹{localFilters.price.max}</span>
          </div>
          <div className="flex space-x-4">
            <input
              type="range"
              name="min"
              min="0"
              max="5000"
              value={localFilters.price.min}
              onChange={handlePriceChange}
              className="w-full"
            />
            <input
              type="range"
              name="max"
              min="1000"
              max="99999"
              value={localFilters.price.max}
              onChange={handlePriceChange}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Sizes Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Sizes</h3>
        <div className="grid grid-cols-3 gap-2">
          {availableFilters.sizes.map(size => (
            <label key={size} className="flex items-center">
              <input
                type="checkbox"
                checked={localFilters.sizes.includes(size)}
                onChange={() => handleCheckboxChange('sizes', size)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">US {size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colors Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Colors</h3>
        <div className="grid grid-cols-2 gap-2">
          {availableFilters.colors.map(color => (
            <label key={color} className="flex items-center">
              <input
                type="checkbox"
                checked={localFilters.colors.includes(color)}
                onChange={() => handleCheckboxChange('colors', color)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700 capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Brands</h3>
        <div className="space-y-2">
          {availableFilters.brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={localFilters.brands.includes(brand)}
                onChange={() => handleCheckboxChange('brands', brand)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {showApplyButton && (
        <button
          onClick={applyFilters}
          className="w-full py-2 bg-black text-white rounded-md"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
};

export default FilterSidebar;