import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function SideFilter({ isOpen, onClose }) {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    gender: [],
    price: [],
    size: [],
    color: [],
    brand: [],
    saleType: []
  });

  // State to manage expanded/collapsed filter sections
  const [expandedSections, setExpandedSections] = useState({
    Categories: true,
    Gender: true,
    Price: true,
    Size: true,
    Color: true,
    Brand: true,
    "Sale & Offers": true
  });

  const filterCategories = [
    {
      title: "Categories",
      options: ["Lifestyle", "Running", "Basketball", "Training", "Soccer", "Skateboarding"]
    },
    {
      title: "Gender",
      options: ["Men", "Women", "Unisex", "Kids"]
    },
    {
      title: "Price",
      options: ["Under ₹5,000", "₹5,000-₹10,000", "₹10,000-₹15,000", "Over ₹15,000"]
    },
    {
      title: "Size",
      options: ["UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9", "UK 9.5", "UK 10", "UK 10.5", "UK 11", "UK 12"]
    },
    {
      title: "Color",
      options: ["Black", "White", "Gray", "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown"]
    },
    {
      title: "Brand",
      options: ["Nike Sportswear", "NikeLab", "Jordan", "ACG", "Nike SB"]
    },
    {
      title: "Sale & Offers",
      options: ["Just In", "Coming Soon", "Promo Exclusion", "Sustainable Materials"]
    }
  ];

  // Toggle individual filter option
  const toggleFilter = (category, option) => {
    setSelectedFilters(prev => {
      if (prev[category].includes(option)) {
        return {
          ...prev,
          [category]: prev[category].filter(item => item !== option)
        };
      } else {
        return {
          ...prev,
          [category]: [...prev[category], option]
        };
      }
    });
  };

  // Toggle expand/collapse filter sections
  const toggleSection = (title) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // Clear all selected filters
  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      gender: [],
      price: [],
      size: [],
      color: [],
      brand: [],
      saleType: []
    });
  };

  // Map filter categories to their respective state properties
  const getCategoryStateKey = (title) => {
    const map = {
      "Categories": "categories",
      "Gender": "gender",
      "Price": "price",
      "Size": "size",
      "Color": "color",
      "Brand": "brand",
      "Sale & Offers": "saleType"
    };
    return map[title] || "categories";
  };

  // Prevent body scroll when filter is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Calculate total number of active filters
  const totalActiveFilters = Object.values(selectedFilters).reduce(
    (sum, filters) => sum + filters.length, 0
  );

  // Check if any filters are selected
  const hasActiveFilters = totalActiveFilters > 0;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Filter Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 bg-white w-72 md:w-80 shadow-lg transform transition-transform duration-300 ease-in-out overflow-hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-4 py-5 border-b flex justify-between items-center">
          <h2 className="font-bold text-xl">Filter</h2>
          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-600 hover:text-black hover:underline"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black"
              aria-label="Close filter"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        {/* Filter content with scrolling */}
        <div className="h-[calc(100%-128px)] overflow-y-auto py-2">
          <div className="px-4">
            {/* Selected filter tags */}
            {hasActiveFilters && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Active Filters ({totalActiveFilters})</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedFilters).flatMap(([category, options]) =>
                    options.map((option, idx) => (
                      <div
                        key={`${category}-${idx}`}
                        className="bg-gray-100 rounded-full px-3 py-1 flex items-center text-sm"
                      >
                        <span>{option}</span>
                        <button
                          onClick={() => toggleFilter(category, option)}
                          className="ml-2 text-gray-500 hover:text-black"
                        >
                          ×
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Filter categories */}
            <div className="space-y-4">
              {filterCategories.map((category, idx) => {
                const isExpanded = expandedSections[category.title];
                return (
                  <div key={idx} className="border-b pb-3">
                    <div
                      className="flex justify-between items-center cursor-pointer py-2"
                      onClick={() => toggleSection(category.title)}
                    >
                      <h3 className="font-semibold text-base">{category.title}</h3>
                      {isExpanded ?
                        <IoIosArrowUp className="text-gray-500" /> :
                        <IoIosArrowDown className="text-gray-500" />
                      }
                    </div>

                    {/* Filter options - shown/hidden based on expanded state */}
                    {isExpanded && (
                      <div className="space-y-2 mt-2">
                        {category.options.map((option, optionIdx) => {
                          const stateKey = getCategoryStateKey(category.title);
                          const isChecked = selectedFilters[stateKey].includes(option);

                          return (
                            <div key={optionIdx} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`${category.title}-${optionIdx}`}
                                checked={isChecked}
                                onChange={() => toggleFilter(stateKey, option)}
                                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                              />
                              <label
                                htmlFor={`${category.title}-${optionIdx}`}
                                className="ml-2 text-sm text-gray-700 cursor-pointer select-none flex-1"
                              >
                                {option}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t p-4">
          <button
            onClick={onClose}
            className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            Apply Filter{hasActiveFilters ? ` (${totalActiveFilters})` : ''}
          </button>
        </div>
      </aside>
    </>
  );
}

export default SideFilter;