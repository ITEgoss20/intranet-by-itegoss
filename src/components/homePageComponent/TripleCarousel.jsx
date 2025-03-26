import Carousel from "./Carousel";

const TripleCarousel = () => {
  const imagesLeft = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuvLdD0LJLsqyDSLWpl6VWNbB7e0TxzeTkQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOUf1sYsNgoGsyfCi-fes4ujzMTSpGg0ROQ&s",
  ];
  const imagesRightTop = [
    "https://images.indianexpress.com/2023/08/peacock-2.jpg",
    "https://cdn1.byjus.com/wp-content/uploads/blog/2023/08/08205354/pexels-andrea-piacquadio-4813766-scaled.jpg",
    "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2023/08/peacock.jpg?fit=1200%2C675&ssl=1",
  ];
  const imagesRightBottom = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSnGxhn9iPn8RtJyAn_TlYYJUAcjmzwOgCg&s",
    "https://images.unsplash.com/photo-1516408388733-2f8364f2e00b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBmaXNofGVufDB8fDB8fHww",
    "https://www.usnews.com/object/image/00000148-faa6-d526-a5db-fba6951a0000/141010-clownfish-editorial.jpg?update-time=1412954786605&size=responsive640",
  ];

  return (
    <div className="w-[60%] min-w-80 space-y-2 md:space-y-0 md:w-full md:h-[400px] mx-auto md:flex">
      {/* Left Carousel */}
      <div className="h-40 md:h-full md:w-1/2 md:border-r border-white">
        <Carousel images={imagesLeft} />
      </div>

      {/* Right Side - Two Carousels */}
      <div className="flex flex-col h-80 space-y-2 md:space-y-0 md:h-full md:w-1/2">
        <div className="h-40 flex-1 md:h-1/2">
          <Carousel images={imagesRightTop} />
        </div>
        <div className="h-40 flex-1 md:h-1/2 md:border-t border-white">
          <Carousel images={imagesRightBottom} />
        </div>
      </div>
    </div>
  );
};

export default TripleCarousel;
