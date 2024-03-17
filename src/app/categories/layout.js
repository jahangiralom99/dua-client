import React from "react";
import { IoIosSearch } from "react-icons/io";
import AllCategory from "../Components/AllCategory/AllCategory";
import { getCategory } from "../utils/category";

const CategoriesLayout = async ({ children }) => {
  const data = await getCategory();


  return (
    <section className="mt-12 px-6">
      <div className="md:flex gap-6 justify-center">
        <div className="lg:w-[30%] bg-white rounded-md lg:h-[550px] lg:sticky top-3">
          <h1 className="px-12 py-4 text-center rounded-t-xl bg-green-500 text-bold text-white">
            Categories
          </h1>
          <div className="p-3 relative">
            <input
              type="text"
              className="py-3 pl-12 border-2 focus:outline-none focus:border-green-500 w-full rounded-md"
            />
            <IoIosSearch className="text-2xl absolute top-7 left-6 text-gray-400"></IoIosSearch>
          </div>
          <div className="p-3 md:h-96 overflow-y-scroll scrollbar-thin">
            {data?.map((category, idx) => (
              <AllCategory key={category.id}
                category={category}
                open={category.id == idx + 1}
              ></AllCategory>
            ))}
            
          </div>
        </div>
        <div className="lg:w-[70%]">{children}</div>
      </div>
    </section>
  );
};

export default CategoriesLayout;
