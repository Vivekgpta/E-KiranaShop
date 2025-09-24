import { useState } from "react";

const Categories = ({ categories = [], onSelectCategory }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative   w-[400px] p-2 "
      onMouseLeave={() => setOpen(false)}
       // Close dropdown when mouse leaves the area
    >
      <div onClick={() => setOpen(!open)}>
        <div className="text-red-500  pl-4 font-extrabold text-[18px] dark:text-black  cursor-pointer ">
          Delivery in 12 minutes
        </div>
        <div className="text-red-500  pl-4  text-[13px] dark:text-black  cursor-pointer ">
          Categories{" "}
          <i
            onClick={() => setOpen(!open)}
            className="bi bi-caret-down-fill ml-1"
          ></i>
        </div>
      </div>

      {/* Animated Dropdown */}
      <div
        className={`fixed  left-0 mt-2 h-full w-full shadow-black rounded py-1 transform transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="h-36 w-[500px] ml-12 bg-white p-2 shadow shadow-black  ">
          <div className="flex justify-between items-center">
            <div className="text-[15px] font-normal m-2 mt-3">
              <p>Change Location</p>
            </div>
            <div className="text-[12px] font-normal mx-2">
              <i
                onClick={() => setOpen(!open)}
                className="bi bi-x-lg ml-1 cursor-pointer"
              ></i>
            </div>
          </div>

          <div className="flex justify-between gap-2 items-center mr-4 ">
            <div className=" bg-green-700 hover:bg-green-600 transition-all duration-300 ease-in-out text-[13px] w-52 p-2 items-center text-white rounded-xl h-full">
              Detect my location
            </div>
            or
            {/*[0c831f]   459220 */}
            <div className=" w-full rounded-[5px] border-1 border-black h-full m-1 p-0.5">
              <input type="text" placeholder="Search Location" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
