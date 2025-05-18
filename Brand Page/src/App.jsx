import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';

import DontMissPopularProduct from './components/DontMissPopularProduct';
import HeroSecFour from './components/HeroSecFour';
import TrendingProductPage from './components/TrendingProductPage';
import Trending from './components/Trending';
import HeroShopBySports from './components/HeroShopBySports';
import MenSingleProduct from './components/category/MenSingleProduct'
import WomenSingleProduct from './components/category/WomenSingleProduct'
import KidsSingleProduct from './components/category/KidsSingleProduct'
import MenHero from './components/category/MenHero';
import WomenHero from './components/category/WomenHero';
import KidsHero from './components/category/KidsHero';
import Favorite from './components/collection/Favorite'

// Component imports with lazy loading for improved performance
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'))
const NewFeatured = lazy(() => import('./components/new featured/NewFeatured'));
const Category = lazy(() => import('./components/category/Category'));
const Men = lazy(() => import('./components/category/Men'));
const Women = lazy(() => import('./components/category/Women'));
const Kids = lazy(() => import('./components/category/Kids'));
const CollectionPage = lazy(() => import('./components/collection/CollectionPage'));
const Sports = lazy(() => import('./components/Sports'));
const NotFound = lazy(() => import('./components/NotFound'));
const SignIn = lazy(() => import('./components/SignIn'));
const Login = lazy(() => import('./components/Login'));
const SaleOn = lazy(() => import('./components/SaleOn'));
const Shop = lazy(() => import('./components/Shop'));
const HeroOne = lazy(() => import('./components/HeroOne'))
const HeroSecOne = lazy(() => import('./components/HeroSecOne'))
const HeroSecTow = lazy(() => import('./components/HeroSecTow'))
const HeroSecThree = lazy(() => import('./components/HeroSecThree'))
const MaxAirDn8 = lazy(() => import('./components/MaxAirDn8'))
const Cart = lazy(() => import('./components/Cart'))


// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-700"></div>
  </div>
);

const MainLayout = () => (
  <div className="flex flex-col min-h-screen relative">
    <header className="sticky top-0 z-40 w-full">
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
      </Suspense>
    </header>
    <main className="flex-grow">
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </main>
    <footer>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </footer>
  </div>
);

// Hero component properly defined as a function component to use hooks
function Hero() {
  return (
    <>
      <HeroOne />
      <HeroSecOne />
      <HeroSecTow />
      <HeroSecThree />
      <HeroSecFour />
      <Trending />
      <HeroShopBySports />
    </>
  );
}

// ... other imports remain the same

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Hero />,
      },
      {
        path: 'new-featured',
        element: <NewFeatured />,
      },
      {
        path: 'category',
        element: <Category />,
        children: [
          {
            path: '',
            element: (
              <div>
                {/* This route show the three hero components */}
                <MenHero />
                <WomenHero />
                <KidsHero />
              </div>
            ),
          },
          {
            path: 'men',
            element: <Men />,
          },
          {
            path: 'women',
            element: <Women />,
          },
          {
            path: 'kids',
            element: <Kids />,
          },
          {
            path: 'men/men-single-product',
            element: <MenSingleProduct />,
          },
          {
            path: 'women/women-single-product',
            element: <WomenSingleProduct />,
          },
          {
            path: 'kids/kids-single-product',
            element: <KidsSingleProduct />,
          },
        ],
      },
      {
        path: 'collection',
        element: <CollectionPage />,
      },
      {
        path: 'sports',
        element: <Sports />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'sale',
        element: <SaleOn />,
      },
      {
        path: 'max-air-dn8-products',
        element: <MaxAirDn8 />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'favorite',
        element: <Favorite />
      },
      {
        path: 'dont-miss-popular-product',
        element: <DontMissPopularProduct />
      },
      {
        path: "trending-products",
        element: <TrendingProductPage />
      },

    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;