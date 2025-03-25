import React from "react";
import TripleCarousel from "../components/TripalCarousel";
import Carousel from "../components/Carousel";
import Dashboard from "../components/Dashboard";
import FlipCardSection from "../components/FlipCardSection";
import ArticalsSection from "../components/ArticalsSection";
import UseFullLinks from "../components/UseFullLinks";

const HomePage = () => {
  const imagesLeft = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuvLdD0LJLsqyDSLWpl6VWNbB7e0TxzeTkQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOUf1sYsNgoGsyfCi-fes4ujzMTSpGg0ROQ&s",
  ];
  return (
    <div className="px-4">
      <TripleCarousel />
      <div className="h-60 mt-4">
        <Carousel images={imagesLeft} />
      </div>
      <Dashboard />
      <FlipCardSection />
      <ArticalsSection />
      <UseFullLinks />
    </div>
  );
};

export default HomePage;
