import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewFeatured from './components/NewFeatured';
import Category from './components/Category';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import MenNav from './components/MenNav';
import WomenNav from './components/WomenNav';
import KidsNav from './components/KidsNav';
import Collection from './components/Collection';
import Sports from './components/Sports';
import NotFound from './components/NotFound';
import Login from './components/Login';

const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const CategoryLayout = () => (
  <div className="flex">
    <Category />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: (
          <div className="hero">
            <div>
              <h1>YOUR FEET DESERVE THE BEST</h1>
              <p>
                YOUR FEET DESERVE THE BEST AND WE ARE HERE TO GIVE YOU COMFORT WITH OUR
                SHOES. BE WITH US AND ENJOY AND GLAMORIZE YOUR LIFE.
              </p>
              <div>
                <button>Shop Now</button>
                <button>Sale On</button>
              </div>
            </div>
          </div>
        ),
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
              <div className="flex">
                <MenNav />
                <Men />
              </div>
            ),
          },
          {
            path: 'women',
            element: (
              <div className="flex">
                <WomenNav />
                <Women />
              </div>
            ),
          },
          {
            path: 'kids',
            element: (
              <div className="flex">
                <KidsNav />
                <Kids />
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
      }, {
        path: 'login',
        element: <Login />
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
