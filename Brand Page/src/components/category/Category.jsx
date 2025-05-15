import { Outlet, useLocation } from 'react-router-dom';
import CategoryNav from './CategoryNav';
import MenHero from './MenHero';
import WomenHero from './WomenHero';
import KidsHero from './KidsHero';

function Category() {
  const location = useLocation();
  const isBaseCategoryRoute = location.pathname === '/category';

  return (
    <div className='flex flex-col w-full'>
      <CategoryNav />
      <div className="w-full">
        {isBaseCategoryRoute && (
          <>
            {/* <MenHero />
            <WomenHero />
            <KidsHero /> */}
          </>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Category;