import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import DontMissPopularProduct from './components/DontMissPopularProduct';
import HeroSecFour from './components/HeroSecFour';
import TrendingProductPage from './components/TrendingProductPage';
import Trending from './components/Trending';
import HeroShopBySports from './components/HeroShopBySports';

// Component imports with lazy loading for improved performance
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'))
const NewFeatured = lazy(() => import('./components/NewFeatured'));
const Category = lazy(() => import('./components/Category'));
const Men = lazy(() => import('./components/Men'));
const Women = lazy(() => import('./components/Women'));
const Kids = lazy(() => import('./components/Kids'));
const MenNav = lazy(() => import('./components/MenNav'));
const WomenNav = lazy(() => import('./components/WomenNav'));
const KidsNav = lazy(() => import('./components/KidsNav'));
const Collection = lazy(() => import('./components/Collection'));
const Sports = lazy(() => import('./components/Sports'));
const NotFound = lazy(() => import('./components/NotFound'));
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
  <>
    <Navbar />
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </>
);

const CategoryLayout = () => (
  <div className="flex flex-col md:flex-row">
    <Category />
    <div className="w-full">
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </div>
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
        element: <CategoryLayout />,
        children: [
          {
            path: 'men',
            element: (
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4">
                  <MenNav />
                </div>
                <div className="w-full md:w-3/4">
                  <Men />
                </div>
              </div>
            ),
          },
          {
            path: 'women',
            element: (
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4">
                  <WomenNav />
                </div>
                <div className="w-full md:w-3/4">
                  <Women />
                </div>
              </div>
            ),
          },
          {
            path: 'kids',
            element: (
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4">
                  <KidsNav />
                </div>
                <div className="w-full md:w-3/4">
                  <Kids />
                </div>
              </div>
            ),
          },
        ],
      },
      {
        path: 'collection',
        element: <Collection />,
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
        path: 'dont-miss-popular-product',
        element: <DontMissPopularProduct />
      },
      {
        path: "trending-products",
        element: <TrendingProductPage />
      }
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