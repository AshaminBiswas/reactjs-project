import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

// Component imports with lazy loading for improved performance
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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

// Image import statement
import nike from './assets/image A+.png';

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
  // Correctly using useNavigate inside a component
  const navigate = useNavigate();

  // Navigation handler functions
  const handleShop = () => {
    navigate("/shop");
  };

  const handleSale = () => {
    navigate("/sale");
  };

  return (
    <div className="hero flex flex-col md:flex-row justify-center items-center px-4 py-8">
      <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pb-4 bg-gradient-to-r from-blue-600 to-pink-500 inline-block text-transparent bg-clip-text">
          YOUR FEET DESERVE THE BEST FEELING
        </h1>
        <p className="pb-6 text-base sm:text-lg md:text-xl max-w-prose">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO GIVE YOU COMFORT WITH OUR
          SHOES. BE WITH US AND ENJOY AND GLAMORIZE YOUR LIFE.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleShop}
            className="bg-gradient-to-r from-indigo-700 to-purple-600 py-2 px-4 text-white font-semibold cursor-pointer rounded transition-transform hover:scale-105"
          >
            Shop Now
          </button>
          <button
            onClick={handleSale}
            className="bg-gradient-to-r from-indigo-700 to-purple-600 py-2 px-4 text-white font-semibold cursor-pointer rounded transition-transform hover:scale-105"
          >
            Sale On
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg shadow-blue-400 rounded-xl order-1 md:order-2 mb-8 md:mb-0">
        <img
          className="w-full h-auto object-contain transform hover:rotate-3 transition-transform duration-300"
          src={nike}
          alt="nike shoe"
          loading="eager"
        />
      </div>
    </div>
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