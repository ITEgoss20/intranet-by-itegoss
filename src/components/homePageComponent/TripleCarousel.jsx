import Carousel from "./Carousel";

const TripleCarousel = () => {
  const imagesLeft = [
    "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2019/06/13/gold-fair_unb.jpg",
    "https://images.mid-day.com/images/images/2022/jan/goldjewelleryistock_d.jpg",
    "https://static.toiimg.com/thumb/msid-106209377,width-1070,height-580,imgsize-1187465,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  ];
  const imagesRightTop = [
    "https://kameswarijewellers.in/wp-content/uploads/sites/494/2022/10/DNL8H-3-1.jpg",
    "https://www.orra.co.in/media/catalog/product/cache/8706a87b250cd4797f5bf599698c5c7a/o/s/osn22134_1_rlhqrrrq2k79mcll.jpg",
    "https://www.orra.co.in/media/catalog/product/cache/8706a87b250cd4797f5bf599698c5c7a/3/0/306a8253_-_copy.jpg",
  ];
  const imagesRightBottom = [
    "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-109275848/109275848.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxiCX70G_B3ej9z244AnfQnFHJxdcrRpcwfhfAv-HyBJ9wii7UbriEptAj7PKABEQBjfk&usqp=CAU",
    "https://www.tarinika.in/cdn/shop/articles/IMGL2909_1600x.jpg?v=1652451184",
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
