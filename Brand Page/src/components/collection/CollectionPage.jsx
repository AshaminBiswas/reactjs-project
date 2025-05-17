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
  // Move filters state definition before localFilters
  const [filters, setFilters] = useState({
    price: { min: 1000, max: 99999 },
    sizes: [],
    colors: [],
    brands: []
  });
  const [localFilters, setLocalFilters] = useState(filters); // Now this will work
  const [sortOption, setSortOption] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Sample product data
  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: 'Nike Air Max 270',
        price: 15495,
        discountPrice: 10550,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqecxopax/air-max-270-mens-shoes-KkLcGR.png',
        colors: ['black', 'white', 'red'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.5,
        isNew: true,
        category: 'running',
        gender: 'men'
      },
      {
        id: 2,
        name: 'Nike Air Force 1',
        price: 11495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-force-1-07-mens-shoe-jBrhbr.png',
        colors: ['white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.8,
        category: 'casual',
        gender: 'men'
      },
      {
        id: 3,
        name: 'Nike Air Jordan 1 Retro High',
        price: 17995,
        discountPrice: 15995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-jordan-1-retro-high-og-shoe-1Q1Q1Q.png',
        colors: ['black', 'red'],
        sizes: [7, 8, 9, 10, 11, 12, 13],
        brand: 'Jordan',
        rating: 4.9,
        category: 'basketball',
        gender: 'men'
      },
      {
        id: 4,
        name: 'Nike React Infinity Run Flyknit',
        price: 15995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/react-infinity-run-flyknit-running-shoe-1Q1Q1Q.png',
        colors: ['blue', 'black'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        isNew: true,
        category: 'running',
        gender: 'men'
      },
      {
        id: 5,
        name: 'Nike Blazer Mid 77 Vintage',
        price: 9995,
        discountPrice: 8495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/blazer-mid-77-vintage-shoe-1Q1Q1Q.png',
        colors: ['white', 'black'],
        sizes: [7, 8, 9, 10, 11],
        brand: 'Nike',
        rating: 4.3,
        category: 'casual',
        gender: 'unisex'
      },
      {
        id: 6,
        name: 'Nike Air Max 90',
        price: 12995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-90-shoe-1Q1Q1Q.png',
        colors: ['white', 'red', 'black'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.7,
        isNew: true,
        category: 'casual',
        gender: 'unisex'
      },
      {
        id: 7,
        name: 'Nike Dunk Low Retro',
        price: 10995,
        discountPrice: 8995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/dunk-low-retro-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.5,
        category: 'skateboarding',
        gender: 'unisex'
      },
      {
        id: 8,
        name: 'Nike Air Zoom Pegasus 38',
        price: 11995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-pegasus-38-running-shoe-1Q1Q1Q.png',
        colors: ['blue', 'black', 'green'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        isNew: true,
        category: 'running',
        gender: 'women'
      },
      {
        id: 9,
        name: 'Nike Metcon 7',
        price: 13995,
        discountPrice: 11995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/metcon-7-training-shoe-1Q1Q1Q.png',
        colors: ['black', 'red'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.4,
        category: 'training',
        gender: 'men'
      },
      {
        id: 10,
        name: 'Nike Air VaporMax 2021',
        price: 18995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-vapormax-2021-shoe-1Q1Q1Q.png',
        colors: ['black', 'white', 'blue'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.7,
        isNew: true,
        category: 'running',
        gender: 'women'
      },
      {
        id: 11,
        name: 'Nike Revolution 6',
        price: 3495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/revolution-6-running-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [6, 7, 8, 9, 10],
        brand: 'Nike',
        rating: 4.2,
        category: 'running',
        gender: 'kids'
      },
      {
        id: 12,
        name: 'Nike Air Max 2090',
        price: 14995,
        discountPrice: 12995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-2090-shoe-1Q1Q1Q.png',
        colors: ['black', 'white', 'blue'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        category: 'casual',
        gender: 'men'
      },
      {
        id: 13,
        name: 'Nike Flex Runner 2',
        price: 2995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/flex-runner-2-running-shoe-1Q1Q1Q.png',
        colors: ['pink', 'blue', 'black'],
        sizes: [3, 4, 5, 6, 7],
        brand: 'Nike',
        rating: 4.0,
        category: 'running',
        gender: 'kids'
      },
      {
        id: 14,
        name: 'Nike Air Zoom Tempo Next%',
        price: 19995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-tempo-next-running-shoe-1Q1Q1Q.png',
        colors: ['red', 'black'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.8,
        isNew: true,
        category: 'running',
        gender: 'men'
      },
      {
        id: 15,
        name: 'Nike SB Zoom Blazer Mid',
        price: 8995,
        discountPrice: 7495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/sb-zoom-blazer-mid-skate-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike SB',
        rating: 4.3,
        category: 'skateboarding',
        gender: 'men'
      },
      {
        id: 16,
        name: 'Nike Air Monarch IV',
        price: 5995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-monarch-iv-training-shoe-1Q1Q1Q.png',
        colors: ['white', 'black'],
        sizes: [8, 9, 10, 11, 12, 13],
        brand: 'Nike',
        rating: 4.1,
        category: 'training',
        gender: 'men'
      },
      {
        id: 17,
        name: 'Nike Joyride Run Flyknit',
        price: 15995,
        discountPrice: 11995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/joyride-run-flyknit-running-shoe-1Q1Q1Q.png',
        colors: ['pink', 'blue'],
        sizes: [5, 6, 7, 8, 9],
        brand: 'Nike',
        rating: 4.4,
        category: 'running',
        gender: 'women'
      },
      {
        id: 18,
        name: 'Nike Air Max 97',
        price: 16995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-97-shoe-1Q1Q1Q.png',
        colors: ['silver', 'black', 'white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.7,
        category: 'casual',
        gender: 'unisex'
      },
      {
        id: 19,
        name: 'Nike ZoomX Vaporfly Next% 2',
        price: 24995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/zoomx-vaporfly-next-2-running-shoe-1Q1Q1Q.png',
        colors: ['pink', 'black'],
        sizes: [8, 9, 10, 11],
        brand: 'Nike',
        rating: 4.9,
        isNew: true,
        category: 'running',
        gender: 'women'
      },
      {
        id: 20,
        name: 'Nike Court Vision Low',
        price: 4995,
        discountPrice: 3995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/court-vision-low-shoe-1Q1Q1Q.png',
        colors: ['white', 'black'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.0,
        category: 'casual',
        gender: 'unisex'
      },
      // Continuing with 30 more products...
      {
        id: 21,
        name: 'Nike Air Zoom SuperRep',
        price: 10995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-superrep-training-shoe-1Q1Q1Q.png',
        colors: ['black', 'pink'],
        sizes: [6, 7, 8, 9, 10],
        brand: 'Nike',
        rating: 4.3,
        category: 'training',
        gender: 'women'
      },
      {
        id: 22,
        name: 'Nike Air Max 2090',
        price: 14995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-2090-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [5, 6, 7, 8, 9],
        brand: 'Nike',
        rating: 4.5,
        category: 'running',
        gender: 'women'
      },
      {
        id: 23,
        name: 'Nike Air Max 270 React',
        price: 16995,
        discountPrice: 13995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-270-react-shoe-1Q1Q1Q.png',
        colors: ['black', 'white', 'red'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        isNew: true,
        category: 'casual',
        gender: 'men'
      },
      {
        id: 24,
        name: 'Nike Free RN 5.0',
        price: 8995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/free-rn-5-running-shoe-1Q1Q1Q.png',
        colors: ['black', 'blue'],
        sizes: [7, 8, 9, 10, 11],
        brand: 'Nike',
        rating: 4.2,
        category: 'running',
        gender: 'men'
      },
      {
        id: 25,
        name: 'Nike Air Zoom Pegasus 38 Shield',
        price: 13995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-pegasus-38-shield-running-shoe-1Q1Q1Q.png',
        colors: ['black', 'blue'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.5,
        isNew: true,
        category: 'running',
        gender: 'men'
      },
      {
        id: 1,
        name: 'Nike Air Max 270',
        price: 15495,
        discountPrice: 10550,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqecxopax/air-max-270-mens-shoes-KkLcGR.png',
        colors: ['black', 'white', 'red'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.5,
        isNew: true,
        category: 'running',
        gender: 'men'
      },
      {
        id: 2,
        name: 'Nike Air Force 1',
        price: 11495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-force-1-07-mens-shoe-jBrhbr.png',
        colors: ['white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.8,
        category: 'casual',
        gender: 'men'
      },
      {
        id: 3,
        name: 'Nike Air Jordan 1 Retro High',
        price: 17995,
        discountPrice: 15995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-jordan-1-retro-high-og-shoe-1Q1Q1Q.png',
        colors: ['black', 'red'],
        sizes: [7, 8, 9, 10, 11, 12, 13],
        brand: 'Jordan',
        rating: 4.9,
        category: 'basketball',
        gender: 'men'
      },
      {
        id: 4,
        name: 'Nike React Infinity Run Flyknit',
        price: 15995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/react-infinity-run-flyknit-running-shoe-1Q1Q1Q.png',
        colors: ['blue', 'black'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        isNew: true,
        category: 'running',
        gender: 'men'
      },
      {
        id: 5,
        name: 'Nike Blazer Mid 77 Vintage',
        price: 9995,
        discountPrice: 8495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/blazer-mid-77-vintage-shoe-1Q1Q1Q.png',
        colors: ['white', 'black'],
        sizes: [7, 8, 9, 10, 11],
        brand: 'Nike',
        rating: 4.3,
        category: 'casual',
        gender: 'unisex'
      },
      {
        id: 6,
        name: 'Nike Air Max 90',
        price: 12995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-90-shoe-1Q1Q1Q.png',
        colors: ['white', 'red', 'black'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.7,
        isNew: true,
        category: 'casual',
        gender: 'unisex'
      },
      {
        id: 7,
        name: 'Nike Dunk Low Retro',
        price: 10995,
        discountPrice: 8995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/dunk-low-retro-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.5,
        category: 'skateboarding',
        gender: 'unisex'
      },
      {
        id: 8,
        name: 'Nike Air Zoom Pegasus 38',
        price: 11995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-pegasus-38-running-shoe-1Q1Q1Q.png',
        colors: ['blue', 'black', 'green'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        isNew: true,
        category: 'running',
        gender: 'women'
      },
      {
        id: 9,
        name: 'Nike Metcon 7',
        price: 13995,
        discountPrice: 11995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/metcon-7-training-shoe-1Q1Q1Q.png',
        colors: ['black', 'red'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.4,
        category: 'training',
        gender: 'men'
      },
      {
        id: 10,
        name: 'Nike Air VaporMax 2021',
        price: 18995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-vapormax-2021-shoe-1Q1Q1Q.png',
        colors: ['black', 'white', 'blue'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.7,
        isNew: true,
        category: 'running',
        gender: 'women'
      },
      {
        id: 11,
        name: 'Nike Revolution 6',
        price: 3495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/revolution-6-running-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [6, 7, 8, 9, 10],
        brand: 'Nike',
        rating: 4.2,
        category: 'running',
        gender: 'kids'
      },
      {
        id: 12,
        name: 'Nike Air Max 2090',
        price: 14995,
        discountPrice: 12995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-2090-shoe-1Q1Q1Q.png',
        colors: ['black', 'white', 'blue'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        category: 'casual',
        gender: 'men'
      },
      {
        id: 13,
        name: 'Nike Flex Runner 2',
        price: 2995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/flex-runner-2-running-shoe-1Q1Q1Q.png',
        colors: ['pink', 'blue', 'black'],
        sizes: [3, 4, 5, 6, 7],
        brand: 'Nike',
        rating: 4.0,
        category: 'running',
        gender: 'kids'
      },
      {
        id: 14,
        name: 'Nike Air Zoom Tempo Next%',
        price: 19995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-tempo-next-running-shoe-1Q1Q1Q.png',
        colors: ['red', 'black'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.8,
        isNew: true,
        category: 'running',
        gender: 'men'
      },
      {
        id: 15,
        name: 'Nike SB Zoom Blazer Mid',
        price: 8995,
        discountPrice: 7495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/sb-zoom-blazer-mid-skate-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike SB',
        rating: 4.3,
        category: 'skateboarding',
        gender: 'men'
      },
      {
        id: 16,
        name: 'Nike Air Monarch IV',
        price: 5995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-monarch-iv-training-shoe-1Q1Q1Q.png',
        colors: ['white', 'black'],
        sizes: [8, 9, 10, 11, 12, 13],
        brand: 'Nike',
        rating: 4.1,
        category: 'training',
        gender: 'men'
      },
      {
        id: 17,
        name: 'Nike Joyride Run Flyknit',
        price: 15995,
        discountPrice: 11995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/joyride-run-flyknit-running-shoe-1Q1Q1Q.png',
        colors: ['pink', 'blue'],
        sizes: [5, 6, 7, 8, 9],
        brand: 'Nike',
        rating: 4.4,
        category: 'running',
        gender: 'women'
      },
      {
        id: 18,
        name: 'Nike Air Max 97',
        price: 16995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-97-shoe-1Q1Q1Q.png',
        colors: ['silver', 'black', 'white'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.7,
        category: 'casual',
        gender: 'unisex'
      },
      {
        id: 19,
        name: 'Nike ZoomX Vaporfly Next% 2',
        price: 24995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/zoomx-vaporfly-next-2-running-shoe-1Q1Q1Q.png',
        colors: ['pink', 'black'],
        sizes: [8, 9, 10, 11],
        brand: 'Nike',
        rating: 4.9,
        isNew: true,
        category: 'running',
        gender: 'women'
      },
      {
        id: 20,
        name: 'Nike Court Vision Low',
        price: 4995,
        discountPrice: 3995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/court-vision-low-shoe-1Q1Q1Q.png',
        colors: ['white', 'black'],
        sizes: [7, 8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.0,
        category: 'casual',
        gender: 'unisex'
      },
      // Continuing with 30 more products...
      {
        id: 21,
        name: 'Nike Air Zoom SuperRep',
        price: 10995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-superrep-training-shoe-1Q1Q1Q.png',
        colors: ['black', 'pink'],
        sizes: [6, 7, 8, 9, 10],
        brand: 'Nike',
        rating: 4.3,
        category: 'training',
        gender: 'women'
      },
      {
        id: 22,
        name: 'Nike Air Max 2090',
        price: 14995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-2090-shoe-1Q1Q1Q.png',
        colors: ['black', 'white'],
        sizes: [5, 6, 7, 8, 9],
        brand: 'Nike',
        rating: 4.5,
        category: 'running',
        gender: 'women'
      },
      {
        id: 23,
        name: 'Nike Air Max 270 React',
        price: 16995,
        discountPrice: 13995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-max-270-react-shoe-1Q1Q1Q.png',
        colors: ['black', 'white', 'red'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.6,
        isNew: true,
        category: 'casual',
        gender: 'men'
      },
      {
        id: 24,
        name: 'Nike Free RN 5.0',
        price: 8995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/free-rn-5-running-shoe-1Q1Q1Q.png',
        colors: ['black', 'blue'],
        sizes: [7, 8, 9, 10, 11],
        brand: 'Nike',
        rating: 4.2,
        category: 'running',
        gender: 'men'
      },
      {
        id: 25,
        name: 'Nike Air Zoom Pegasus 38 Shield',
        price: 13995,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7c15a1a1-5a3e-4a5e-8b9c-5d5d9d9d9d9d/air-zoom-pegasus-38-shield-running-shoe-1Q1Q1Q.png',
        colors: ['black', 'blue'],
        sizes: [8, 9, 10, 11, 12],
        brand: 'Nike',
        rating: 4.5,
        isNew: true,
        category: 'running',
        gender: 'men'
      },


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
              showApplyButton={false} // Add this prop
            />

            {/* Single Apply button at bottom */}
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

export default CollectionPage;