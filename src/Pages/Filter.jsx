import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";

const Filter = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        {filterProducts.length >0 ?
        <>
      <h1 className="text-2xl font-bold mb-6 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {filterProducts.map((product, index) => {
          return (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
      </>
      :
      <div className="flex justify-center">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6xmxNro5reKFmW6iUceXcslgRK-N6_2Smw&s" alt="Product Not Found"  className="h-96"/>
      </div>
}
    </div>
  );
};

export default Filter;
