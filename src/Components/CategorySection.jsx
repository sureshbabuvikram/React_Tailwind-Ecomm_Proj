import React from "react";
import MenImage from "../assets/Images/man.jpg";
import WomanImage from "../assets/Images/woman.jpg";
import KidImage from "../assets/Images/kid.jpg";
const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageUrl: MenImage,
    },
    {
      title: "Women",
      imageUrl: WomanImage,
    },
    {
      title: "Kids",
      imageUrl: KidImage,
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              className="w-full h-full object-cover rounded-lg shadow-md"
              src={category.imageUrl}
              alt={category.title}
            />
            <div className="absolute top-20 left-10">
              <h3 className="text-lg font-bold">{category.title}</h3>
              <h3 className="text-slate-950">View All</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
