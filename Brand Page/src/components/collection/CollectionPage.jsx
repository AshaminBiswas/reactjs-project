import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import SortDropdown from './SortDropdown';
import Breadcrumbs from './Breadcrumbs';
import Pagination from './Pagination';
import { FiFilter } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const CollectionPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    price: { min: 0, max: 300 },
    sizes: [],
    colors: [],
    brands: []
  });
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sample product data
  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: 'Nike Air Max 270',
        price: 150,
        discountPrice: 120,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqecxopax/air-max-270-mens-shoes-KkLcGR.png',
        colors: ['black', 'white', 'red'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.5,
        isNew: true,
        category: 'running'
      },
      {
        id: 2,
        name: 'Nike Air Force 1',
        price: 110,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-force-1-07-mens-shoe-jBrhbr.png',
        colors: ['white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.8,
        category: 'casual'
      },
      // Add more sample products...
    ];
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, [category]);

  // Filter products based on selected filters
  useEffect(() => {
    let result = [...products];

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
  }, [filters, products]);

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
  }, [sortOption, filteredProducts.length]); // Only re-sort when option changes or filters change

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Home', path: '/' },
          { name: 'Men', path: '/category/men' },
          { name: category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All', path: `/men/${category || ''}` }
        ]}
      />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          Men's {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Shoes'}
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
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
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
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters to find what you're looking for.</p>
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
              <button onClick={() => setIsFilterOpen(false)}>
                <MdClose size={24} />
              </button>
            </div>
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              availableFilters={{
                sizes: [7, 8, 9, 10, 11, 12, 13],
                colors: ['black', 'white', 'red', 'blue', 'green'],
                brands: ['Nike', 'Jordan', 'Nike SB']
              }}
            />
            <button
              className="w-full py-3 bg-black text-white rounded-lg mt-4"
              onClick={() => setIsFilterOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CollectionPage;