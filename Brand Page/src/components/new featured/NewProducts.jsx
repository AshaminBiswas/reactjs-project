import { HiArrowsRightLeft } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import image1 from '../../assets/new featured/image1.jpg';

function NewProducts() {
  return (
    <>
      <div className='sticky top-16 left-0 py-2 px-4 flex justify-between items-center border-b bg-white z-99'>
        <h1 className="sm:text-2xl text-xl font-semibold">New (50)</h1>
        <div className="flex gap-6">
          <div className="flex gap-2 items-center sm:text-2xl">
            <p>Show Filter</p>
            <div className="font-bold cursor-pointer">
              <HiArrowsRightLeft />
            </div>
          </div>
          <div className="flex gap-2 items-center sm:text-2xl">
            <p>Sort By</p>
            <div className="font-bold cursor-pointer">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="relative">
            <img className="h-[300px] w-full object-cover" src={image1} alt={`Product ${index + 1}`} />
            <div className="absolute top-25 left-5 mr-4 w-full text-white pr-2">
              <h1 className="text-lg sm:text-2xl font-extrabold pb-2 leading-none">
                "WHATEVER YOU WANT, IT'S RIGHT THERE. YOU SEE IT, YOU WANT IT. GO GET IT"
              </h1>
              <p>-A'ja Wilson</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewProducts;

