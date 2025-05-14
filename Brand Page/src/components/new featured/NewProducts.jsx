import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import SideFilter from "./SideFilter";

function NewProducts() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Ensure filter closes when switching to mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isFilterOpen) {
        setIsFilterOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isFilterOpen]);

  return (
    <>
      <div className='sticky top-16 left-0 py-2 px-4 flex justify-between items-center border-b bg-white z-30'>
        <h1 className="sm:text-2xl text-xl font-semibold">New (50)</h1>
        <div className="flex gap-6">
          <div
            className="flex gap-2 items-center sm:text-2xl cursor-pointer hover:opacity-70 transition-opacity"
            onClick={toggleFilter}
          >
            <p>{isFilterOpen ? "Hide Filter" : "Show Filter"}</p>
            <div className="font-bold">
              <HiArrowsRightLeft />
            </div>
          </div>
          <div className="flex gap-2 items-center sm:text-2xl cursor-pointer">
            <p>Sort By</p>
            <div className="font-bold">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>

      {/* Side Filter */}
      <SideFilter isOpen={isFilterOpen} onClose={toggleFilter} />
    </>
  );
}

export default NewProducts;