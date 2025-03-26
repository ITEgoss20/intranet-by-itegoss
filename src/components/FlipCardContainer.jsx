import React from "react";
// import './index.css'; // Import your CSS for custom classes

const FlipCardContainer = () => {
  const cards = [
    {
      title: "Card One",
      content: "This is the back side of Card One. Cool right?",
    },
    {
      title: "Card Two",
      content: "Here’s the back of Card Two. Smooth and clean!",
    },
    {
      title: "Card Three",
      content: "Back side of Card Three. Designed by your bro!",
    },
  ];

  

  return (
    <div className="flex items-center justify-center p-4 mt-8">
      <div className="flex flex-wrap gap-6 max-w-6xl justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-72 h-96 perspective group hover:cursor-pointer"
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
