"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AllCategory = ({ category, open, subCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link
      onClick={() => setIsOpen(!isOpen)}
      href={`/categories/${category.cat_id}`}
      className="p-4 rounded-lg  border cursor-pointer hover:bg-[#e8f0f5] block mt-2 "
      key={category.id}
    >
      <div className="flex items-center gap-5">
        <Image
          height={40}
          width={40}
          src={`https://duaruqyah.com/assets/icon/${category.cat_icon}.svg`}
          alt="svg"
        />
        <div>
          <p className=" font-bold">{category.cat_name_en}</p>
          <p className="text-sm">Subcategory: {category.no_of_subcat}</p>
        </div>
      </div>
      {isOpen && <></>}
    </Link>
  );
};

export default AllCategory;
