import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// main images
import mesaJacket from "../assets/3.png";
import heavyJacket from "../assets/1.png";
import machajacket from "../assets/2.png";
import oatmeal from "../assets/4.png";
import classic from "../assets/5prent.png";
import blackjack from "../assets/6.png";
import blackjacks from "../assets/5.png";
import blackjackt from "../assets/essential-knit.WEBP";

// child images
import chHoodie from "../assets/1-child.JPG"
import leater from "../assets/2child.JPG"
import utilitys from "../assets/3child.JPG"
import heavyChild from "../assets/1.png";
import machaChild from "../assets/2.png";
import CarouselCard from "../caruselCard/CarouselCard";
import utility from "../assets/3.png"
import white from "../assets/6child.JPG";
import whites from "../assets/6childs.JPG"
import cuteWhite from "../assets/7child.JPG";
import essential from "../assets/9.png"
import classicChild from "../assets/5-child.JPG"
import chrome from "../assets/4-child.JPG"
import chorms from "../assets/4childs.JPG"
import knit from "../assets/9 child.JPG"


const AllProducts = () => {
  const products = [
    { id: 1, title: "CH Hoodie black", category: "Hoodie", oldPrice: 40, price: 3500, stock: "In Stock", discount: "-15%", img: mesaJacket, child: [heavyChild, chHoodie] },
    { id: 2, title: "Black leather Jacket", category: "Coats & Jackets", oldPrice: 40, price: 4000, stock: "In Stock", discount: "-15%", img: heavyJacket, child: [machaChild, leater] },
    { id: 3, title: "Black utility jacket", category: "Coats & Jackets", oldPrice: 40, price: 3500, stock: "In Stock", discount: "-15%", img: machajacket, child: [utility, utilitys] },
    { id: 4, title: "Chrome Hearts sweater", category: "Sweaters", oldPrice: 40, price: 1800, stock: "In Stock", discount: "-15%", img: oatmeal, child: [chrome, chorms] },
    { id: 5, title: "The Classic Bomber", category: "Coats & Jackets", oldPrice: 40, price: 4500, stock: "In Stock", discount: "-15%", img: classic, child: [classicChild] },
    { id: 6, title: "The Black Jacket", category: "Coats & Jackets", oldPrice: 40, price: 4500, stock: "Out of Stock", discount: "-15%", img: blackjack, child: [white, whites] },
    { id: 7, title: "CH Hoodie white", category: "Hoodie", oldPrice: 40, price: 3500, stock: "Out of Stock", discount: "-15%", img: blackjacks, child: [] },
    { id: 8, title: "REB1RTH Essential Knit Crew", category: "Coats & Jackets", oldPrice: 40, price: 1800, stock: "Out of Stock", discount: "-15%", img: blackjackt, child: [essential, knit] },
  ];

  const categories = ["All", "Coats & Jackets", "Hoodie", "Sweaters"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const ProductCard = ({ item }) => (
    <div className="bg-black rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="relative flex justify-center items-center">
        <img src={item.img} alt={item.title} className="w-full h-auto object-cover" />
      </div>
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#FFFFFF]">{item.title}</h2>
          <span className="text-sm sm:text-base md:text-lg font-bold text-[#FFFFFF]">৳{item.price}</span>
        </div>
        <p className="text-[#B3B3B3] text-xs sm:text-sm mb-4">{item.stock}</p>

        <NavLink
          to={`/product-details/${item.id}`}
          state={{ clickedProduct: item, allProducts: products }}
        >
          <button className="w-full bg-[#FFFFFF] text-[#0F0F0F] text-xs sm:text-sm py-2 sm:py-3 rounded-md hover:bg-[#2A2828] hover:text-[#FFFFFF] transition">
            Order Now
          </button>
        </NavLink>
      </div>
    </div>
  );

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  const getCategoryTitle = (cat) => {
    if (cat === "Hoodie") return "Hoodie";
    if (cat === "Sweaters") return "Sweaters";
    if (cat === "Coats & Jackets") return "Premium Jackets";
    return cat;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-2 mt-10 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-sm sm:text-base px-3 py-2 rounded-sm font-semibold transition ${
              selectedCategory === cat
                ? "bg-[#363636] text-white"
                : "bg-[#363636] text-[#FFFFFF] hover:bg-[#F4F4F4] hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="mt-5">
        <h3 className="text-xl text-center sm:text-2xl text-[#FFFFFF] font-semibold mb-6 p-3">
          {selectedCategory === "All" ? "Winter Collection" : getCategoryTitle(selectedCategory)}
        </h3>

        {/*  UPDATED ICON SECTION */}
        <ul className="relative flex justify-end items-center mb-4 px-4 gap-3">
          <li>
            <button className="w-10 h-10 flex items-center bg-[#FFFFFF] justify-center rounded-full border border-gray-400 hover:bg-black hover:text-white transition">
              <FiArrowLeft className="text-xl" />
            </button>
          </li>
          <li>
            <button className="w-10 h-10 flex items-center bg-[#FFFFFF] justify-center rounded-full border border-gray-400 hover:bg-black hover:text-white transition">
              <FiArrowRight className="text-xl" />
            </button>
          </li>
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <CarouselCard />
    </div>
  );
};

export default AllProducts;
