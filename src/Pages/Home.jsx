import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import HeroImage from "../assets/Images/hero1.jpg";
import InfoSection from "../Components/InfoSection";
import CategorySection from "../Components/CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/productSlice";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [])
  return (
    <div className="bg-white mt-2  px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black text-sm font-bold px-2 py-2.5">
            Shop By Categories
          </div>
          <ul className="space-y-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 broder">
            {Categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-800 rounded-full mr-2"></div>
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative flex items-center justify-center">
          <img
            src={HeroImage}
            alt="HeroImage"
            className="h-full w-11/12 object-cover"
          />
          <div className="absolute text-center">
            <h1 className="text-black mb-4 font-bold text-lg md:text-xl">
              Discover Our Products
            </h1>
            <p className="text-white mb-4">
              Explore a wide range of high-quality items that suit your style
              and needs.
            </p>
            <Link to={"/shop"} className="bg-slate-800 px-6 py-1.5 text-white mt-4 hover:bg-sky-500 transform transition-transform duration-300 hover:scale-105">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
      <div className="container mx-auto py-12">
        <h1 className="text-2xl font-bold mb-6 text-center">Top Products</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.slice(0, 5).map((product,index)=>{
            return(
                <div key={index}>
                   <ProductCard product={product} />
                </div>
            )
        })}
       </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
