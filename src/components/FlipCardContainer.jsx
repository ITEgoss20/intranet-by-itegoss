import React from "react";
import { useSelector } from "react-redux";
// import './index.css'; // Import your CSS for custom classes

const FlipCardContainer = () => {
  const cards = [
    {
      title: "Card One",
      content: "User Role Module",
    },
    {
      title: "Card Two",
      content: "People",
    },
    {
      title: "Card Three",
      content: "Onboarding/Offboarding",
    },
    {
      title: "Card Three",
      content: "Leave management",
    },
    {
      title: "Card Three",
      content: "Reaquest Management",
    },
    {
      title: "Card Three",
      content: "Inventory Management",
    },
    {
      title: "Card Three",
      content: "Asset Management",
    },
    {
      title: "Card Three",
      content: "Visitor/Vendor/Customer",
    },
    {
      title: "Card Three",
      content: "Task Allocation",
    },
    {
      title: "Card Three",
      content: "MIS Dashboard",
    },
  ];
  return (
    <div className="flex items-center mt-8">
      <div className="flex flex-wrap gap-6 justify-center mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-64 h-40 perspective group hover:cursor-pointer"
          >
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center text-2xl font-bold text-gray-800 backface-hidden">
                {card.title}
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-900 text-white rounded-2xl shadow-2xl p-6 text-lg backface-hidden rotate-y-180 flex items-center justify-center text-center">
                {card.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCardContainer;
