import Duas from "@/app/Components/Duas/Duas";
import { getDuas } from "@/app/utils/Duas";
import React from "react";

const page = async ({ params }) => {
  const dous = await getDuas(params.categoryId);
 

  return (
    <div>
      <h1 className="p-4 px-7 bg-white rounded-lg">
        <span className="font-bold text-green-500">Section: </span>The servant
        is dependent on his Lord {params.categoryId}
      </h1>
      <div>
        {dous?.map((dua, idx) => (
          <Duas key={dua.id} dua={dua} idx={idx}></Duas>
        ))}
      </div>
    </div>
  );
};

export default page;
