import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex mb-6 top-16 left-4 md:fixed z-20 bg-white w-full py-3" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.name}>
            <div className="flex items-center">
              {index > 0 && <FiChevronRight className="h-4 w-4 text-gray-400" />}
              {index === items.length - 1 ? (
                <span className="text-sm font-medium text-gray-500">{item.name}</span>
              ) : (
                <Link
                  to={item.path}
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;