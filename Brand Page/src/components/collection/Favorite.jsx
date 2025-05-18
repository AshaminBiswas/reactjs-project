import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import SortDropdown from './SortDropdown';
import Breadcrumbs from './Breadcrumbs';
import Pagination from './Pagination';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const Favorite = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    price: { min: 1000, max: 99999 },
    sizes: [],
    colors: [],
    brands: []
  });
  const [localFilters, setLocalFilters] = useState(filters);
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Load favorite products from localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteProducts(favorites);
    setFilteredProducts(favorites);
  }, []);

  // Filter products based on selected filters
  useEffect(() => {
    let result = [...favoriteProducts];

    // Filter by price range
    result = result.filter(product =>
      product.price >= filters.price.min &&
      product.price <= filters.price.max
    );

    // Filter by sizes if any are selected
    if (filters.sizes.length > 0) {
      result = result.filter(product =>
        filters.sizes.some(size => product.sizes.includes(size))
      );
    }

    // Filter by colors if any are selected
    if (filters.colors.length > 0) {
      result = result.filter(product =>
        filters.colors.some(color => product.colors.includes(color))
      );
    }

    // Filter by brands if any are selected
    if (filters.brands.length > 0) {
      result = result.filter(product =>
        filters.brands.includes(product.brand)
      );
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, favoriteProducts]);

  // Sort products based on selected option
  useEffect(() => {
    let sorted = [...filteredProducts];

    switch (sortOption) {
      case 'price-low':
        sorted.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price-high':
        sorted.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // 'featured'
        // Keep default sorting
        break;
    }

    setFilteredProducts(sorted);
  }, [sortOption, filteredProducts.length]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleRemoveFromFavorites = (productId) => {
    const updatedFavorites = favoriteProducts.filter(product => product.id !== productId);
    setFavoriteProducts(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Favorites', path: '/favorite' }
        ]}
      />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          Your Favorite Items
        </h1>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          {/* Mobile filter button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg"
          >
            <FiFilter />
            <span>Filters</span>
          </button>

          {/* Sort dropdown */}
          <SortDropdown
            options={[
              { value: 'featured', label: 'Featured' },
              { value: 'price-low', label: 'Price: Low to High' },
              { value: 'price-high', label: 'Price: High to Low' },
              { value: 'rating', label: 'Top Rated' },
              { value: 'newest', label: 'Newest' }
            ]}
            selectedOption={sortOption}
            onChange={setSortOption}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar - Desktop */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <FilterSidebar
            filters={filters}
            onChange={handleFilterChange}
            availableFilters={{
              sizes: [7, 8, 9, 10, 11, 12, 13],
              colors: ['black', 'white', 'red', 'blue', 'green'],
              brands: ['Nike', 'Jordan', 'Nike SB']
            }}
          />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map(product => (
                  <div key={product.id} className="group relative">
                    <button
                      onClick={() => handleRemoveFromFavorites(product.id)}
                      className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                className="mt-8"
              />
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No favorite items yet</h3>
              <p className="mt-2 text-gray-500">Start adding products to your favorites to see them here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-white z-50 overflow-y-auto p-4 transform transition-transform md:hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <MdClose size={24} />
              </button>
            </div>

            <FilterSidebar
              filters={localFilters}
              onChange={setLocalFilters}
              availableFilters={{
                sizes: [7, 8, 9, 10, 11, 12, 13],
                colors: ['black', 'white', 'red', 'blue', 'green'],
                brands: ['Nike', 'Jordan', 'Nike SB']
              }}
              showApplyButton={false}
            />

            <div className="sticky bottom-0 bg-white pt-4 pb-6 border-t">
              <button
                className="w-full py-3 bg-black text-white rounded-lg"
                onClick={() => {
                  handleFilterChange(localFilters);
                  setIsFilterOpen(false);
                }}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Favorite;