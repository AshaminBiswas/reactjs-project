import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pest from './components/Pest';
import ViewPest from './components/ViewPest';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/note",
    element: (
      <>
        <Navbar />
        <Pest />
      </>
    ),
  },
  {
    path: "/note/:id",
    element: (
      <>
        <Navbar />
        <ViewPest />
      </>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
